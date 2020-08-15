import * as React from "react";
import { Component } from "react";
import { ITitleBase } from "./../Interfaceses/ITitleBase";
import { Image } from "react-bootstrap";
import styles from "./../styles/titlePreviewCard.module.css";
import moment from "moment";
export interface TitlePreviewCardProps {
  title: ITitleBase;
}

export interface TitlePreviewCardState {}

class TitlePreviewCard extends React.Component<
  TitlePreviewCardProps,
  TitlePreviewCardState
> {
  render() {
    const title = { ...this.props.title };
    return (
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <Image
            className={styles.image}
            src={require("./../" + title.posterUrl)}
            width={"60px"}
          />
          <div className={styles.infoContainer}>
            <div className={styles.titleName}>{title.name}</div>
            {console.log(title)}
            {console.log(title.titleType)}
            {console.log(title.status)}
            <div className={styles.titleDesc}>{`${
              title.titleType.name
            } / ${moment(title.lastUpdated).year()}`}</div>
            <div
              className={styles.titleDesc}
            >{`${title.lastReleasedEpisodeNumber} эпизодов`}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TitlePreviewCard;
