import React, { useEffect } from 'react'
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
import { ITitleType } from './Interfaceses/ITitleType'
import { connect } from 'react-redux'
import * as Redux from 'redux'
import { loadFilterData } from './store/slices/filterSlice'
import { loadTitleBases } from './store/slices/titleSlice'

function App(props: any) {
  useEffect(() => {
    props.loadfilterData()
    props.loadTitleBases()
  })
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/Search" component={TitleSearch} />
        {/* <Route exact path="/Title" render={() => <Title title={title} />} /> */}
      </Switch>
    </React.Fragment>
  )
}
const mapDispatchToProps = (
  dispatch: Redux.Dispatch<Redux.AnyAction>,
  ownProps: any,
): any => ({
  loadfilterData: () => dispatch(loadFilterData()),
  loadTitleBases: () => dispatch(loadTitleBases()),
})
export default connect(null, mapDispatchToProps)(App)
