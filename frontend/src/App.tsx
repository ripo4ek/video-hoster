import React from 'react'
import logo from './logo.svg'
import './styles/coreStyles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar'
import { Provider } from 'react-redux'
import TitleSlider from './components/titleSlider'
import { Container, Row, Col } from 'react-bootstrap'
import { ITitleDropdownElement } from './Interfaceses/ITitleDropdownElement'
import TitleDropdownList from './components/titleDropdownList'
import TitleChunk from './components/titleChunk'
import { ITitleDropdownList } from './Interfaceses/ITitleDropdownList'
import { ITitleChunk } from './Interfaceses/ITitleChunk'
import TitleElement from './components/titleElement'
import { ITitleElement } from './Interfaceses/ITitleElement'
import { IGenere } from './Interfaceses/IGenere'
import TitleList from './components/titleList'
import { ITitleList } from './Interfaceses/ITitleList'
import TitleFilter from './components/titleFilter'
import { ISelector } from './Interfaceses/ISelector'
import { IFilterData } from './Interfaceses/IFilterData'
import { ITitleStatus } from './Interfaceses/ITitleStatus'
import { ITitleBase } from './Interfaceses/ITitleBase'
import { ITitleDetails } from './Interfaceses/ITitleDetails'
import { ITitle } from './Interfaceses/ITitle'
import { ITitleConnection } from './Interfaceses/ITitleConnection'
import { IEpisode } from './Interfaceses/IEpisode'
import Title from './components/title'
import TitleSearch from './components/titleSearch'
import MainPage from './components/mainPage'
import { Switch, Route } from 'react-router-dom'

function App() {
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
  const selectorData: ISelector = {
    name: 'TestSelector',
    elements: generes,
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
  const titleBase: ITitleBase = {
    id: 12,
    name: 'TestAnime',
    posterUrl: 'test.jpg',
    treeId: 12,
    TitleInfoId: 12,
    userRating: 7.5,
    generes: generes,
  }

  const titleConnection: ITitleConnection = {
    name: 'testAnime2',
    connectionState: 'Alt Story',
    posterUrl: 'test.jpg',
    episodesCount: 12,
    releaseYear: 2012,
    titleTypeName: 'manga',
  }
  const episode: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 1,
    isReleased: true,
  }
  const episode2: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 2,
    isReleased: true,
  }
  const episode3: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 3,
    isReleased: true,
  }
  const episode4: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 4,
    isReleased: true,
  }
  const episode5: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 5,
    isReleased: true,
  }
  const episode6: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 6,
    isReleased: true,
  }
  const episode7: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 7,
    isReleased: true,
  }
  const episode8: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 8,
    isReleased: true,
  }
  const episode9: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 9,
    isReleased: true,
  }
  const episode10: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 10,
    isReleased: true,
  }
  const episode11: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 11,
    isReleased: true,
  }
  const episode12: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 12,
    isReleased: true,
  }
  const episode13: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 13,
    isReleased: true,
  }
  const episode14: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 14,
    isReleased: true,
  }
  const episode15: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 15,
    isReleased: true,
  }
  const episode16: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 16,
    isReleased: true,
  }
  const episode17: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 17,
    isReleased: true,
  }
  const episode18: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 18,
    isReleased: true,
  }
  const episode19: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 19,
    isReleased: true,
  }
  const episode20: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 20,
    isReleased: true,
  }
  const episode21: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 21,
    isReleased: true,
  }
  const episode22: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 22,
    isReleased: true,
  }
  const episode23: IEpisode = {
    name: 'testEpisodeName',
    description: 'testEpisodeName description',
    releaseDate: new Date(12, 12, 1212, 12, 12, 12, 12),
    episodeUrl: 'test.mp4',
    episodeNumber: 23,
    isReleased: true,
  }
  const titleDetails: ITitleDetails = {
    titleType: status,
    eposodesCount: 12,
    titleStatus: status23,
    description:
      'dgfssssssssssssssssssssssssssssgfnbbvcnvcbneroihboiegrssssssssssssssssssssssssssssssssssgn[iogvoidngvoixcofv',
    releaseDateRange: {
      from: new Date(12, 12, 1212, 12, 12, 12, 12),
      to: new Date(12, 12, 1212, 12, 12, 12, 12),
    },
    episodeDuration: 23,
    screenshots: ['test.jpg', 'test.jpg', 'test.jpg'],
    episodes: [
      episode,
      episode2,
      episode3,
      episode4,
      episode5,
      episode6,
      episode7,
      episode8,
      episode9,
      episode10,
      episode11,
      episode12,
      episode13,
      episode14,
      episode15,
      episode16,
      episode17,
      episode18,
      episode19,
      episode20,
      episode21,
      episode22,
    ],
  }
  const title: ITitle = {
    titleBase: titleBase,
    titleDetails: titleDetails,
    titleConnections: [titleConnection, titleConnection, titleConnection],
  }
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/Search" component={TitleSearch} />
        <Route exact path="/Title" render={() => <Title title={title} />} />
      </Switch>
    </React.Fragment>
  )
}

export default App
