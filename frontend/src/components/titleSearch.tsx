import * as React from 'react'
import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TitleList from './titleList'
import TitleFilter from './titleFilter'
import { ITitleElement } from './../Interfaceses/ITitleElement'
import { ITitleList } from './../Interfaceses/ITitleList'
import { IGenere } from './../Interfaceses/IGenere'
import { IFilterData } from './../Interfaceses/IFilterData'
import { ITitleStatus } from './../Interfaceses/ITitleStatus'
export interface TitleSearchProps {}

export interface TitleSearchState {}

class TitleSearch extends React.Component<TitleSearchProps, TitleSearchState> {
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
    const status: ITitleStatus = { id: 12, name: 'OVA' }
    const status2: ITitleStatus = { id: 33, name: 'anime' }
    const status23: ITitleStatus = { id: 223, name: 'complete' }
    const statuses: Array<ITitleStatus> = [status, status2, status23]
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
          <Col xs={8}>
            <TitleList titleList={titleList} />
          </Col>
          <Col>
            <TitleFilter filterData={filterData} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TitleSearch
