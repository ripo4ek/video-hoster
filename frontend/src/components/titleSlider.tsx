import * as React from 'react'
import Slider, { Settings } from 'react-slick'
import { ITitleBase } from '../Interfaceses/ITitleBase'
import TitleCard from './titleCard'
import styles from './../styles/slider.module.css'
import { IGenere } from './../Interfaceses/IGenere'
import { connect } from 'react-redux'
import { loadTitleBases } from '../store/slices/titleSlice'
import * as Redux from 'redux'

export interface TitleSliderProps {}

interface ReduxTitleSliderProps {
  titleBases?: Array<ITitleBase>
}

interface DispatchProps {
  loadTitleBases?: () => void
}

type Props = ReduxTitleSliderProps & DispatchProps & TitleSliderProps

export interface TitleSliderState {}
class TitleSlider extends React.Component<Props, TitleSliderState> {
  componentDidMount() {
    if (this.props.loadTitleBases) this.props.loadTitleBases()
  }

  sliderRender = () => {
    if (typeof this.props.titleBases !== 'undefined') {
      return this.props.titleBases.map((tb) => <TitleCard title={tb} />)
    }
    return null
  }
  render() {
    // const testElement: ITitleBase = {
    //   titleDetailsId: 222,
    //   id: 12,
    //   name: 'TestAnime',
    //   posterUrl: 'test.jpg',
    //   treeId: 2,
    //   userRating: 9.5,
    //   generes: new Array<IGenere>(),
    // }
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
        <Slider {...settings}>{this.sliderRender()}</Slider>
      </div>
    )
  }
}
// const mapStateToProps = (
//   state: any,
//   ownProps: TitleSliderProps,
// ): ReduxTitleSliderProps => {
//   console.log(state)
//   return {
//     titleBases: state.topRaitedTitles,
//   }
// }
// const mapDispatchToProps = (
//   dispatch: Redux.Dispatch<Redux.AnyAction>,
//   ownProps: TitleSliderProps,
// ): DispatchProps => ({
//   loadTitleBases: () => dispatch(loadTopRatiedTitleBases(10)),
// })
const mapStateToProps = (
  state: any,
  ownProps: TitleSliderProps,
): ReduxTitleSliderProps => {
  console.log(state)
  return {
    titleBases: state.entities.titles.titleBases
      .slice()
      .sort((a: ITitleBase, b: ITitleBase) =>
        a.userRating > b.userRating ? 1 : b.userRating > a.userRating ? -1 : 0,
      )
      .slice(0, 10),
  }
}
export default connect(mapStateToProps)(TitleSlider)
