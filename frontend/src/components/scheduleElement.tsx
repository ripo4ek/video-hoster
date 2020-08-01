import * as React from 'react'
import { Component } from 'react'
import { IScheduleElement } from './../Interfaceses/IScheduleElement'
import dateFormatter from './../helperFunctions/dateFormatter'
import styles from './../styles/scheduleElement.module.css'
export interface ScheduleElementProps {
  element: IScheduleElement
}

export interface ScheduleElementState {}

class ScheduleElement extends React.Component<
  ScheduleElementProps,
  ScheduleElementState
> {
  render() {
    const element = { ...this.props.element }
    return (
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div
            className={styles.episodeNumber}
          >{`${element.episodeNumber} серия`}</div>
          <div className={styles.episodeName}>{element.name}</div>
          <div className={styles.episodeDate}>
            {dateFormatter(element.releaseDate)}
          </div>
          <div className={styles.tickContainer}>
            {element.isReleased ? (
              <svg
                className={styles.releaseTick}
                viewBox="0 0 24 24"
                id="icon-done"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
              </svg>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ScheduleElement
