import * as React from 'react'
import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TitleSlider from './titleSlider'
import TitleChunk from './titleChunk'
import TitleList from './titleList'
import TitleFilter from './titleFilter'
import { IGenere } from './../Interfaceses/IGenere'
import { ITitleElement } from './../Interfaceses/ITitleElement'
import { ITitleList } from './../Interfaceses/ITitleList'
import { ITitleDropdownElement } from './../Interfaceses/ITitleDropdownElement'
import { ITitleChunk } from './../Interfaceses/ITitleChunk'
import { ITitleStatus } from './../Interfaceses/ITitleStatus'
import { IFilterData } from './../Interfaceses/IFilterData'
import { ITitleDropdownList } from './../Interfaceses/ITitleDropdownList'

export interface MainPageProps {}

export interface MainPageState {}

class MainPage extends React.Component<MainPageProps, MainPageState> {
  render() {
    const generes: Array<IGenere> = [
      { id: 12, name: 'test' },
      { id: 13, name: 'Gavno' },
      { id: 14, name: 'testGavno' },
    ]
    const test22: ITitleElement = {
      id: 12,
      name: 'TestAnime',
      posterUrl: 'test.jpg',
      description: 'dfgggggggggggggggggggggggggggggggggggggggggggggggggggggg',
      generes: generes,
    }
    const test23: ITitleElement = {
      id: 12,
      name: 'TestAnime',
      posterUrl: 'test.jpg',
      description: 'dfgggggggggggggggggggggggggggggggggggggggggggggggggggggg',
      generes: generes,
    }
    const titleList: ITitleList = {
      name: 'TestName',
      titles: [test22, test23],
    }
    const test: ITitleDropdownElement = {
      id: 12,
      name: 'TestAnime',
      posterUrl: 'test.jpg',
      seriesNum: 99,
      releaseTime: new Date(12, 12, 12, 12, 12, 12),
    }
    const test2: ITitleDropdownElement = {
      id: 12,
      name: 'TestAnime',
      posterUrl: 'test.jpg',
      seriesNum: 99,
      releaseTime: new Date(12, 12, 12, 12, 12, 12),
    }
    const entity1: ITitleDropdownList = {
      name: 'Monday',
      titleElements: [test, test2],
    }
    const entity2: ITitleDropdownList = {
      name: 'Friday',
      titleElements: [test, test2],
    }

    const titles: Array<ITitleDropdownList> = [entity1, entity2]
    const chunk: ITitleChunk = { name: 'firstList', titles }
    const chunk2: ITitleChunk = { name: 'second', titles }
    const chunk3: ITitleChunk = { name: 'third', titles }
    const status: ITitleStatus = { id: 12, name: 'OVA' }
    const status2: ITitleStatus = { id: 33, name: 'anime' }
    const status23: ITitleStatus = { id: 223, name: 'complete' }
    const statuses: Array<ITitleStatus> = [status, status2]
    const filterData: IFilterData = {
      generes: generes,
      statuses: statuses,
      types: [],
      yearRange: {
        from: 1975,
        to: 2020,
      },
    }
    return (
      <Container>
        <Row>
          <Col>
            <h2>
              <a>Сейчас на экранах</a>
            </h2>
            <TitleSlider />
          </Col>
        </Row>
        <Row>
          <Col>
            <TitleChunk titleChunk={chunk} />
          </Col>
          <Col>
            <TitleChunk titleChunk={chunk2} />
          </Col>
          <Col>
            <TitleChunk titleChunk={chunk3} />
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <TitleList preview elementsToShow={5} titleList={titleList} />
          </Col>
          <Col>
            <TitleFilter preview filterData={filterData} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MainPage
