import * as React from 'react'
import TitleDropdownList from './titleDropdownList'
import { ITitleChunk } from './../Interfaceses/ITitleChunk'
import styles from './../styles/titleChunk.module.css'

export interface TitleChunkProps {
  titleChunk: ITitleChunk
}

export interface TitleChunkState {}

class TitleChunk extends React.Component<TitleChunkProps, TitleChunkState> {
  render() {
    const chunk = { ...this.props.titleChunk }
    return (
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.titleMain}>
            <h4 className={styles.chunkTitle}>{chunk.name}</h4>
          </div>
          <div className={styles.listContainer}>
            {chunk.titles.map((title) => (
              <TitleDropdownList elements={title} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default TitleChunk
