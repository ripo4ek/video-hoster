import * as React from 'react'
import Slider, { Settings } from 'react-slick'
import { ITitleBase } from '../Interfaceses/ITitleBase'
import TitleCard from './titleCard'
import styles from './../styles/slider.module.css'
import { IGenere } from './../Interfaceses/IGenere'
import { connect } from 'react-redux'
import { loadTitleBases } from '../store/slices/TitleSlice'
import * as Redux from 'redux'

export interface TitleSliderProps {}

interface ReduxTitleSliderState {}

interface DispatchProps {
  loadTitleBases: () => void
}

type Props = ReduxTitleSliderState & DispatchProps & TitleSliderProps

export interface TitleSliderState {
  
}
class TitleSlider extends React.Component<Props, TitleSliderState> {
  componentDidMount(){
    this.props.loadTitleBases();
  }

  render() {
    const testElement: ITitleBase = {
      TitleDetailsId: 12,
      id: 12,
      name: 'TestAnime',
      posterUrl: 'test.jpg',
      treeId: 2,
      userRating: 9.5,
      generes: new Array<IGenere>(),
    }
    const settings: Settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 3,
      arrows: false,
      className: '',
      adaptiveHeight: true,
    }
    return (
      <div>
        <Slider {...settings}>
          <TitleCard title={testElement} />
          <TitleCard title={testElement} />
          <TitleCard title={testElement} />
          <TitleCard title={testElement} />
          <TitleCard title={testElement} />
          <TitleCard title={testElement} />
          <TitleCard title={testElement} />
          <TitleCard title={testElement} />
          <TitleCard title={testElement} />
        </Slider>
      </div>
    )
  }
}
const mapStateToProps = (state: any, ownProps: TitleSliderProps) : ReduxTitleSliderState => ({titleBases: state.titles})
const mapDispatchToProps = (dispatch: Redux.Dispatch<Redux.AnyAction>, ownProps: TitleSliderProps ) : DispatchProps=>({
  loadTitleBases: ()=>dispatch(loadTitleBases())
})
connect(mapStateToProps,mapDispatchToProps)(TitleSlider)
export default TitleSlider
