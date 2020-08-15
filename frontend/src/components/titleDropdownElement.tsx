import React, { Component } from "react";
import { createCipher } from "crypto";
import { ITitleDropdownElement } from "../Interfaceses/ITitleDropdownElement";
import { Image } from "react-bootstrap";
import styles from "./../styles/titleDropdownElement.module.css";
export interface TitleDropdownElementProps {
  title: ITitleDropdownElement;
}

export interface TitleDropdownElementState {}

class TitleDropdownElement extends React.Component<
  TitleDropdownElementProps,
  TitleDropdownElementState
> {
  constructor(props: TitleDropdownElementProps) {
    super(props);
  }
  render() {
    const element = { ...this.props.title };
    return (
      <div className={styles.main}>
        <div className={styles.titleImage}>
          <Image
            style={{ width: 60, height: 60 }}
            src={require("./../" + element.posterUrl)}
            roundedCircle
          />
          <span className={styles.title}>{element.name}</span>
        </div>

        <div className={styles.numTime}>
          <div className={styles.numTimeFlex}>
            <span className={styles.series}>
              {element.lastReleasedEpisodeNumber} серия
            </span>
            <span>12:00</span>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleDropdownElement;
