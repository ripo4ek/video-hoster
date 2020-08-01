import * as React from 'react'
import { Component } from 'react'
import { ITitleList } from './../Interfaceses/ITitleList'
import styles from './../styles/titleList.module.css'
import TitleElement from './titleElement'
export interface TitleListProps {
  titleList: ITitleList
  preview?: boolean
  elementsToShow?: number
}

export interface TitleListState {
  preview: boolean
  elementsToShow: number
}

class TitleList extends React.Component<TitleListProps, TitleListState> {
  state = { preview: false, elementsToShow: 5 }
  componentDidMount() {
    const state = { ...this.state }
    const { elementsToShow, preview } = { ...this.props }
    if (typeof preview !== 'undefined') state.preview = preview

    if (typeof elementsToShow !== 'undefined') {
      state.elementsToShow = elementsToShow
    }

    this.setState(state)
  }
  render() {
    const { elementsToShow, preview } = { ...this.state }
    const titleList = this.props.titleList
    return (
      <React.Fragment>
        <div className={styles.container}>
          <div className={styles.flexContainer}>
            <div className={styles.titleContainer}>
              <h2 className={styles.listName}>{titleList.name}</h2>
            </div>
            <div>
              {titleList.titles.slice(0, elementsToShow).map((title) => (
                <TitleElement title={title} />
              ))}
            </div>
          </div>
        </div>
        {preview ? (
          <div className={styles.previewSection}>
            <div className={styles.previewButton}>Весь список</div>
          </div>
        ) : null}
      </React.Fragment>
    )
  }
}

export default TitleList
