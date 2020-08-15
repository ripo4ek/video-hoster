import * as React from "react";
import { Component } from "react";
import ReactPlayer from "react-player";
import styles from "./../styles/player.module.css";
import EpisodeSelect from "./episodeSelect";
import { Container, Col, Row } from "react-bootstrap";
import { IEpisode } from "../Interfaceses/IEpisode";
import dateFormatter from "./../helperFunctions/dateFormatter";

export interface PlayerProps {
  title?: string;
  episodes: Array<IEpisode>;
}

export interface PlayerState {
  selectedEpisode: IEpisode | null;
}

class Player extends React.Component<PlayerProps, PlayerState> {
  state: PlayerState = {
    selectedEpisode: null,
  };
  componentDidMount() {
    const state = { ...this.state };
    state.selectedEpisode = this.props.episodes[0];
    this.setState(state);
  }
  selectHandler = (episode: IEpisode) => {
    this.setState({ selectedEpisode: episode });
  };
  render() {
    const selectedEpisode = this.state.selectedEpisode;
    return (
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <Container>
            <div className={styles.title}>Test</div>
            <Row className={styles.flexContainer}>
              <Col md={9}>
                <div className={styles.playerContainer}>
                  <div className={styles.playerFlexContainer}>
                    <ReactPlayer
                      width={"100%"}
                      height={"100%"}
                      url={selectedEpisode?.episodeUrl}
                    />
                  </div>

                  <EpisodeSelect
                    episodes={this.props.episodes}
                    selectedEpisode={selectedEpisode}
                    onSelect={this.selectHandler}
                  />
                </div>
              </Col>
              <Col md={3}>
                <div className={styles.selectContainer}>
                  <div className={styles.selectAudio}>Озвучки</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={styles.episodeInfo}>
                  <div className={styles.episodeInfoContainer}>
                    <div className={styles.episodeInfoName}>Название:</div>
                    <div className={styles.episodeInfoData}>
                      {selectedEpisode ? selectedEpisode.name : null}
                    </div>
                  </div>
                  <div className={styles.episodeInfoContainer}>
                    <div className={styles.episodeInfoName}>Дата выхода:</div>
                    <div className={styles.episodeInfoData}>
                      {selectedEpisode
                        ? dateFormatter(selectedEpisode.releaseDate)
                        : null}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Player;
