//TODO: Рефактор + пофиксить state

import * as React from 'react'
import { Component } from 'react'
import styles from './../styles/episodeSelect.module.css'
import Image from './basicComponents/image'
import { IEpisode } from './../Interfaceses/IEpisode'
import extractor from './../helperFunctions/sizeElementExtractor'
export interface EpisodeSelectProps {
  episodes: Array<IEpisode>
  onSelect(episode: IEpisode): void

  selectedEpisode: IEpisode | null
}

export interface EpisodeSelectState {
  leftBoundary: number
  rightBoundary: number
  firstShowingElement: number
  lastShowingElement: number
  numberToSkip: number
  elementLengthInPersent: number
  translateXState: string
}

class EpisodeSelect extends React.Component<
  EpisodeSelectProps,
  EpisodeSelectState
> {
  private episodesContainer = React.createRef<HTMLDivElement>()
  private episode = React.createRef<HTMLDivElement>()
  private showingContainer = React.createRef<HTMLDivElement>()
  state: EpisodeSelectState = {
    leftBoundary: 0,
    rightBoundary: 0,
    numberToSkip: 0,
    firstShowingElement: 0,
    lastShowingElement: 0,
    elementLengthInPersent: -1,
    translateXState: '0%',
  }
  componentDidMount() {
    const state = { ...this.state }
    this.props.episodes.sort((a, b) =>
      a.episodeNumber > b.episodeNumber ? 1 : -1,
    )
    const { current: container }: any = this.episodesContainer
    const { current: element }: any = this.episode
    const { current: showingContainer }: any = this.showingContainer

    const nodeStyle = window.getComputedStyle(element)
    const elementMarginRight = nodeStyle.getPropertyValue('margin-right')
    const margin = extractor(elementMarginRight)

    const persent =
      (100 * (margin + element.offsetWidth)) / container.offsetWidth
    state.numberToSkip = Math.trunc(
      showingContainer.offsetWidth / (margin + element.offsetWidth),
    )
    const lastEpisodeNum = this.props.episodes[this.props.episodes.length - 1]
      .episodeNumber
    state.elementLengthInPersent = Math.trunc(persent)

    state.firstShowingElement = this.props.episodes[0].episodeNumber
    state.lastShowingElement =
      state.numberToSkip < lastEpisodeNum
        ? state.numberToSkip + 1
        : lastEpisodeNum

    state.leftBoundary = this.props.episodes[0].episodeNumber
    state.rightBoundary = lastEpisodeNum

    this.setState(state)
  }

  rightClickHandler = () => {
    const state = { ...this.state }

    state.firstShowingElement += state.numberToSkip
    state.lastShowingElement =
      state.lastShowingElement + state.numberToSkip > state.rightBoundary
        ? state.rightBoundary
        : state.lastShowingElement + state.numberToSkip

    const prevValue = Number(state.translateXState.slice(0, -1))
    const moveSize = -state.numberToSkip * state.elementLengthInPersent
    console.log(moveSize, moveSize + prevValue, prevValue)
    state.translateXState = `${moveSize + prevValue}%`

    this.setState(state)
  }
  leftClickHandler = () => {
    const state = { ...this.state }

    state.lastShowingElement = state.firstShowingElement

    state.firstShowingElement =
      state.firstShowingElement - state.numberToSkip < state.leftBoundary
        ? state.leftBoundary
        : state.lastShowingElement - state.numberToSkip
    const prevValue = Number(state.translateXState.slice(0, -1))
    const moveSize = state.numberToSkip * state.elementLengthInPersent
    console.log(moveSize, moveSize + prevValue, prevValue)
    state.translateXState = `${moveSize + prevValue}%`
    this.setState(state)
  }
  private episodeInCurrentRange = (episodeNum: number) => {
    return (
      episodeNum >= this.state.firstShowingElement &&
      episodeNum <= this.state.lastShowingElement
    )
  }
  private IsInvalid = (episodeNum: number) => {
    return (
      episodeNum > this.state.rightBoundary ||
      episodeNum < this.state.leftBoundary
    )
  }
  inputChangeHandler = ({ target }: { target: HTMLInputElement }) => {
    let state = { ...this.state }
    let episodes = this.props.episodes
    const episodeNum: number = Number.parseInt(target.value)
    if (this.IsInvalid(episodeNum)) {
      return
    }
    const episode = episodes.find(
      (episode) => episode.episodeNumber === episodeNum,
    )

    if (this.episodeInCurrentRange(episodeNum)) {
      if (typeof episode !== 'undefined') this.props.onSelect(episode)
      return
    }
    let steps = 1
    if (episodeNum > state.lastShowingElement) {
      console.log(episodeNum, state.lastShowingElement)
      while (state.lastShowingElement < episodeNum) {
        steps++
        state.firstShowingElement += state.numberToSkip
        state.lastShowingElement =
          state.lastShowingElement + state.numberToSkip > state.rightBoundary
            ? state.rightBoundary
            : state.lastShowingElement + state.numberToSkip
      }
      const prevValue = Number(state.translateXState.slice(0, -1))
      const moveSize = -(
        state.numberToSkip *
        (steps - 1) *
        state.elementLengthInPersent
      )
      console.log(moveSize, moveSize + prevValue, prevValue)
      state.translateXState = `${moveSize + prevValue}%`
    }
    if (episodeNum < state.firstShowingElement) {
      console.log(episodeNum, state.lastShowingElement)
      while (episodeNum < state.firstShowingElement) {
        steps++
        state.lastShowingElement = state.firstShowingElement

        state.firstShowingElement =
          state.firstShowingElement - state.numberToSkip < state.leftBoundary
            ? state.leftBoundary
            : state.lastShowingElement - state.numberToSkip
      }
      const prevValue = Number(state.translateXState.slice(0, -1))
      const moveSize =
        state.numberToSkip * (steps - 1) * state.elementLengthInPersent
      state.translateXState = `${moveSize + prevValue}%`
    }
    if (typeof episode !== 'undefined') this.props.onSelect(episode)
    this.setState(state)
  }
  render() {
    const episodes = this.props.episodes
    return (
      <div className={styles.container}>
        <div className={styles.containerFlex}>
          <div className={styles.episodeSelect}>
            <div className={styles.episodeSelectText}>Серия №</div>
            <input
              onChange={this.inputChangeHandler}
              className={styles.episodeSelectInput}
              type="number"
              min={this.state.leftBoundary}
              max={this.state.rightBoundary}
            />
          </div>
          <div className={styles.episodeText}>Серия</div>
          <div ref={this.showingContainer} className={styles.btnContainer}>
            <div
              style={{ transform: `translateX(${this.state.translateXState})` }}
              ref={this.episodesContainer}
              className={styles.btns}
            >
              {episodes.map((episode) => (
                <div
                  onClick={() => this.props.onSelect(episode)}
                  ref={this.episode}
                  className={
                    this.props.selectedEpisode === episode
                      ? styles.btnActive
                      : styles.btn
                  }
                >
                  {episode.episodeNumber}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.changeBtnFlexContainer}>
            <button
              disabled={
                this.state.firstShowingElement <= this.state.leftBoundary
              }
              onClick={() => {
                this.leftClickHandler()
              }}
              className={styles.changeBtnLeft}
            >
              <svg
                className={styles.svg}
                width={35}
                height={35}
                viewBox="0 0 24 24"
              >
                <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path>
                <path d="M0-.5h24v24H0z" fill="none"></path>
              </svg>
            </button>
            <button
              disabled={
                this.state.lastShowingElement >= this.state.rightBoundary
              }
              onClick={() => {
                this.rightClickHandler()
              }}
              className={styles.changeBtnRight}
            >
              <svg
                className={styles.svg}
                width={35}
                height={35}
                viewBox="0 0 24 24"
              >
                <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>
                <path d="M0-.25h24v24H0z" fill="none"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EpisodeSelect
