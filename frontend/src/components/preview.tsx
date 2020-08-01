import * as React from 'react'
import Image from './basicComponents/image'
import { Col } from 'react-bootstrap'
import styles from './../styles/preview.module.css'
export interface PreviewProps {
  imageUrls: Array<string>
  title?: string
}

export interface PreviewState {}

class Preview extends React.Component<PreviewProps, PreviewState> {
  render() {
    const props = { ...this.props }
    return (
      <div className={styles.container}>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.screenshotsContainer}>
          <div className={styles.screenshotsFlexContainer}>
            {props.imageUrls.map((screenshot) => (
              <Col>
                <div className={styles.screenshotContainer}>
                  <Image
                    mode={'fill'}
                    src={require('./../' + screenshot)}
                    width={'100%'}
                    height={'100%'}
                  />
                </div>
              </Col>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Preview
