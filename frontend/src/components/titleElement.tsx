import * as React from 'react'
import { Component } from 'react'
import { ITitleElement } from './../Interfaceses/ITitleElement'
import Image from './basicComponents/image'
import styles from './../styles/titleElement.module.css'
export interface TitleElementProps {
  title: ITitleElement
}

export interface TitleElementState {}

class TitleElement extends React.Component<
  TitleElementProps,
  TitleElementState
> {
  render() {
    const title = { ...this.props.title }
    return (
      <div className={styles.container}>
        <div className={styles.mainFlexContainer}>
          <Image
            src={require('./../' + title.posterUrl)}
            mode="fill"
            width={150}
            height={200}
          />
          <div className={styles.titleInfo}>
            <div>
              <a href="#" className={styles.title}>
                {title.name}
              </a>
            </div>
            <div className={styles.genereList}>
              {title.generes.map((genere) => (
                <React.Fragment>
                  <span>
                    <a className={styles.genereName} href="#">
                      {genere.name}
                    </a>
                  </span>
                  <span className={styles.separator}>/</span>
                </React.Fragment>
              ))}
            </div>
            <div>{title.description}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default TitleElement
