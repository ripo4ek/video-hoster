import * as React from "react";
import { Component } from "react";
import { ITitleConnection } from "./../Interfaceses/ITitleConnection";
import Image from "./basicComponents/image";
import styles from "./../styles/titleConnection.module.css";
import plural from "plural-ru";
export interface TitleConnectionProps {
  title: ITitleConnection;
}

export interface TitleConnectionState {}

class TitleConnection extends React.Component<
  TitleConnectionProps,
  TitleConnectionState
> {
  private episodeCountRender = (episodeCount?: number) => {
    if (typeof episodeCount === "number")
      return (
        <div className={styles.text}>
          {`${episodeCount} ${plural(
            episodeCount,
            "эпизод",
            "эпизода",
            "эпизодов"
          )}`}
        </div>
      );
  };
  render() {
    const title = { ...this.props.title };
    return (
      <div className={styles.container}>
        <div className={styles.title}>{title.name}</div>
        <div className={styles.media}>
          <div className={styles.mediaFlex}>
            <Image
              mode={"fill"}
              src={require("./../" + title.posterUrl)}
              width={"52px"}
              height={"72px"}
            />
            <div className={styles.info}>
              <div className={styles.infoFlex}>
                <div
                  className={styles.text}
                >{`${title.titleTypeName} / ${title.releaseYear}`}</div>
                {this.episodeCountRender(title.episodesCount)}
                <div className={styles.text}>{title.connectionState}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleConnection;
