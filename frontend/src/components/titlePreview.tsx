import * as React from "react";
import { Component } from "react";
import { ITitleBase } from "./../Interfaceses/ITitleBase";
import TitlePreviewCard from "./titlePreviewCard";
import styles from "./../styles/titlePreview.module.css";

export interface TitlePreviewProps {
  name?: string;
  titles: Array<ITitleBase>;
}

export interface TitlePreviewState {}

class TitlePreview extends React.Component<
  TitlePreviewProps,
  TitlePreviewState
> {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.containerFlex}>
          <div className={styles.name}>
            {this.props.name ? this.props.name : null}
          </div>
          <div>
            {this.props.titles.map((title: ITitleBase) => (
              <TitlePreviewCard title={title} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TitlePreview;
