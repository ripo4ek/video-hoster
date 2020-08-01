import * as React from 'react'
import { Component } from 'react'
import styles from './../styles/schedule.module.css'
import { IScheduleElement } from '../Interfaceses/IScheduleElement'
import ScheduleElement from './scheduleElement'

export interface ScheduleProps {
  title?: string
  shortVersionElementsCount?: number
  elements: Array<IScheduleElement>
}

export interface ScheduleState {
  isShortVersion: boolean
  shortVersionElementsCount: number
}

class Schedule extends React.Component<ScheduleProps, ScheduleState> {
  state = {
    isShortVersion: true,
    shortVersionElementsCount: 0,
  }

  componentDidMount() {
    const state = { ...this.state }
    let shortVersionElementsCount =
      typeof this.props.shortVersionElementsCount === 'undefined'
        ? 3
        : this.props.shortVersionElementsCount

    const elementsLength = this.props.elements.length
    if (shortVersionElementsCount > elementsLength)
      shortVersionElementsCount = elementsLength
    state.shortVersionElementsCount = shortVersionElementsCount
    this.setState(state)
  }
  showMoreClickHandler = () => {
    const state = { ...this.state }
    state.isShortVersion = !state.isShortVersion
    this.setState(state)
  }
  shrotVersionRender = () => {
    {
      const elements = this.props.elements.slice(0)
      return (
        <React.Fragment>
          {elements
            .reverse()
            .slice(0, this.state.shortVersionElementsCount)
            .map((element) => (
              <ScheduleElement element={element} />
            ))}
          {elements.length !== this.state.shortVersionElementsCount ? (
            <div className={styles.showMore}>
              <div
                onClick={this.showMoreClickHandler}
                className={styles.showMoreText}
              >
                Показать ещё
              </div>
              <svg
                className={styles.arrowUp}
                viewBox="0 0 24 24"
                id="icon-arrow-down"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
                <path d="M0-.75h24v24H0z" fill="none"></path>
              </svg>
            </div>
          ) : null}
        </React.Fragment>
      )
    }
  }
  longVersionRender = () => {
    {
      const elements = this.props.elements.slice(0)
      return (
        <React.Fragment>
          <div className={styles.longContainer}>
            {elements.reverse().map((element) => (
              <ScheduleElement element={element} />
            ))}
          </div>
          <div className={styles.showMore}>
            <div
              onClick={this.showMoreClickHandler}
              className={styles.showMoreText}
            >
              Скрыть
            </div>
            <svg
              className={styles.arrowDown}
              viewBox="0 0 24 24"
              id="icon-arrow-down"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
              <path d="M0-.75h24v24H0z" fill="none"></path>
            </svg>
          </div>
        </React.Fragment>
      )
    }
  }
  render() {
    const elements = this.props.elements.slice(0)
    const shortVersionElementsCount =
      typeof this.props.shortVersionElementsCount === 'undefined'
        ? 3
        : this.props.shortVersionElementsCount

    return (
      <div className={styles.scheduleContainer}>
        {this.props.title ? (
          <div className={styles.title}>{this.props.title}</div>
        ) : null}
        <div className={styles.container}>
          <div className={styles.flexContainer}>
            <div className={styles.episodeNumber}>Номер серии</div>
            <div className={styles.episodeName}>Название</div>
            <div className={styles.episodeDate}>Дата выхода</div>
            <div className={styles.status}>Статус</div>
          </div>
        </div>
        {this.state.isShortVersion
          ? this.shrotVersionRender()
          : this.longVersionRender()}
      </div>
    )
  }
}

export default Schedule
