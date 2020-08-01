import * as React from 'react'
import { ITitleBase } from '../Interfaceses/ITitleBase'
import nameFormat from '../helperFunctions/nameFormatter'
import Image from './basicComponents/image'
import styles from './../styles/titleCard.module.css'
export interface Props {
  title: ITitleBase
}

class TitleListElement extends React.Component<Props> {
  render() {
    const title = { ...this.props.title }
    return (
      <div className={styles.sliderElement}>
        <div className={styles.sliderElementContainer}>
          <Image
            src={require('./../' + title.posterUrl)}
            mode="fit"
            width={150}
            height={250}
          />
          {/* <div style={image}>
          <img
            style={VerticalListStyles.image}
            src={require('./../' + title.posterUrl)}
            alt={title.name}
          />
        </div> */}
          <div>
            <a className={styles.sliderElementText}>{nameFormat(title.name)}</a>
          </div>
        </div>
      </div>
    )
  }
}

export default TitleListElement
