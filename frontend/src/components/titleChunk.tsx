import * as React from 'react'
import TitleDropdownList from './titleDropdownList'
import { ITitleChunk } from './../Interfaceses/ITitleChunk'
import styles from './../styles/titleChunk.module.css'
import { ITitleDropdownList } from './../Interfaceses/ITitleDropdownList'

export interface TitleChunkProps {
  name?: string
  elements: Array<ITitleDropdownList>
}

export interface TitleChunkState {}

class TitleChunk extends React.Component<TitleChunkProps, TitleChunkState> {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.titleMain}>
            {this.props.name ? (
              <h4 className={styles.chunkTitle}>{this.props.name}</h4>
            ) : null}
          </div>
          <div className={styles.listContainer}>
            {this.props.elements.map((title) => (
              <TitleDropdownList elements={title} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default TitleChunk
