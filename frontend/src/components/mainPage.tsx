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
import { ITitleBase } from './../Interfaceses/ITitleBase'
import { loadTitleBases } from '../store/slices/titleSlice'
import { connect } from 'react-redux'
import * as Redux from 'redux'
import TitlePreview from './titlePreview'
import {
  createScheduleChunk,
  createLastUpdatedChunk,
} from './../helperFunctions/createChunk'

export interface MainPageProps {}

//из-за того что сами компоненты универсальны (TitleChunk), но вывод информации в них нет пришлось выводить redux state сюда
//TODO: Сделать возможность универсальность вывода для компонентов и перенести вызов redux state в каждый из них
interface ReduxMainPageProps {
  topRaitedTitleBases: Array<ITitleBase>
  lastUpdatedTitleBases: Array<ITitleBase>
  newAddedTitleBases: Array<ITitleBase>
  goingTitleBases: Array<ITitleBase>
}

interface DispatchProps {}

type Props = ReduxMainPageProps & DispatchProps & MainPageProps

export interface MainPageState {}

class MainPage extends React.Component<Props, MainPageState> {
  render() {
    let lastUpdated = createLastUpdatedChunk(this.props.lastUpdatedTitleBases)
    let schedule = createScheduleChunk(this.props.goingTitleBases)
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
            {console.log(lastUpdated)}
            <TitleChunk name={'Последние обновления'} elements={lastUpdated} />
          </Col>
          <Col>
            <TitleChunk name={'Расписание'} elements={schedule} />
          </Col>
          <Col>
            <TitlePreview
              name={'Последние релизы'}
              titles={this.props.goingTitleBases}
            />
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <TitleList
              name={'Новые релизы'}
              preview
              elementsToShow={5}
              titles={this.props.goingTitleBases}
            />
          </Col>
          <Col>{/* <TitleFilter preview filterData={filterData} /> */}</Col>{' '}
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (
  state: any,
  ownProps: MainPageProps,
): ReduxMainPageProps => {
  console.log(state)
  const titleBases: Array<ITitleBase> = state.entities.titles.titleBases.slice()
  return {
    topRaitedTitleBases: titleBases
      .sort((a: ITitleBase, b: ITitleBase) =>
        a.userRating > b.userRating ? 1 : b.userRating > a.userRating ? -1 : 0,
      )
      .slice(0, 10),
    lastUpdatedTitleBases: titleBases
      .sort((a: ITitleBase, b: ITitleBase) =>
        a.lastUpdated > b.lastUpdated
          ? 1
          : b.lastUpdated > a.lastUpdated
          ? -1
          : 0,
      )
      .slice(0, 10),
    newAddedTitleBases: titleBases
      .sort((a: ITitleBase, b: ITitleBase) =>
        a.addedOnSite > b.addedOnSite
          ? 1
          : b.addedOnSite > a.addedOnSite
          ? -1
          : 0,
      )
      .slice(0, 10),
    goingTitleBases: titleBases.filter((tb) => tb.isFinished === false),
  }
}
export default connect(mapStateToProps, null)(MainPage)
