import * as React from "react";
import { Component } from "react";
import { ITitle } from "./../Interfaceses/ITitle";
import styles from "./../styles/title.module.css";
import Image from "./basicComponents/image";
import { Container, Row, Col } from "react-bootstrap";
import InfoElement from "./basicComponents/infoElement";
import { formatterObject } from "./../helperFunctions/collectionformatter";
import dateRangeFormatter from "../helperFunctions/dateRangeFormatter";
import ImagePreview from "./imagePreview";
import TitleConnection from "./titleConnection";
import Player from "./player";
import ScheduleElement from "./scheduleElement";
import Schedule from "./schedule";
export interface TitleProps {
  title: ITitle;
}

export interface TitleState {}

class Title extends React.Component<TitleProps, TitleState> {
  render() {
    const title = {
      ...this.props.title.titleBase,
      ...this.props.title.titleDetails,
      episiodes: [...this.props.title.titleDetails.episodes],
      titleConnections: this.props.title.titleConnections,
    };
    return (
      <React.Fragment>
        <Container>
          <div className={styles.mainContainer}>
            <Row>
              <Col sm={3}>
                <Image
                  mode={"fill"}
                  src={require("./../" + title.posterUrl)}
                  width={250}
                  height={350}
                />
              </Col>
              <Col sm={9}>
                <div className={styles.mediaContainder}>
                  <div className={styles.mediaFlexContainder}>
                    <div className={styles.mediaRaiting}>
                      <div className={styles.mediaRaitingFlex}>
                        <Image
                          width={35}
                          height={35}
                          mode={"fill"}
                          src={require("./../" + "star_77949.svg")}
                        ></Image>
                        <div
                          className={styles.raitingNumber}
                        >{`${title.userRating}`}</div>
                        <sub className={styles.raitingAll}>/10</sub>
                      </div>
                    </div>
                    <div className={styles.mediaTitleName}>{title.name}</div>
                    <hr />
                    {/* <InfoElement name="Тип">{title.titleType.name}</InfoElement> */}
                    <InfoElement name="Эпизоды">
                      {title.eposodesCount}
                    </InfoElement>
                    <InfoElement name="Статус">
                      {/* {title.titleStatus.name} */}
                    </InfoElement>
                    <InfoElement name="Жанр">
                      <div className={styles.range}>
                        {formatterObject(title.generes).map((element) => (
                          <div className={styles.rangeElement}>{element}</div>
                        ))}
                      </div>
                    </InfoElement>
                    <InfoElement name="Выпуск">
                      {/* {dateRangeFormatter(title.releaseDateRange)} */}
                    </InfoElement>
                    <InfoElement name="Длительность">
                      {`${title.episodeDuration} мин. ~серия`}
                    </InfoElement>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={styles.titleDescription}>
                  {title.description}
                </div>
              </Col>
            </Row>
            <Row>
              <ImagePreview title={"Кадры"} imageUrls={title.screenshots} />
              <ImagePreview
                title={"Трейлер"}
                imageUrls={[title.screenshots[0]]}
              />
            </Row>
            <Row>
              <Col>
                <div className={styles.connection}>
                  <div className={styles.connectionTitle}>Связанное</div>
                  <div className={styles.connectionContainer}>
                    {title.titleConnections.map((title) => (
                      <TitleConnection title={title} />
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        <Row>
          <Col>
            <Player episodes={title.episodes} />
          </Col>
        </Row>
        <Container>
          <Row>
            <Col>
              <Schedule title="График выхода серий" elements={title.episodes} />
            </Col>
          </Row>
        </Container>
      </React.Fragment>

      // <div className={styles.container}>
      //   <div className={styles.flexContainer}>
      //     <Image
      //       mode={'fill'}
      //       src={require('./../' + title.titleBase.posterUrl)}
      //       width={250}
      //       height={350}
      //     />
      //     <div className={styles.mediaContainder}>
      //       <div className={styles.mediaFlexContainder}>
      //         <div className={styles.mediaRaiting}></div>
      //         <div className={styles.mediaTitleName}>
      //           {title.titleBase.name}
      //         </div>
      //         <hr />
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Title;
