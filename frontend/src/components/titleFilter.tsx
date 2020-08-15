import * as React from 'react'
import { Component } from 'react'
import { ITitleFilter } from './../Interfaceses/ITitleFilter'
import { IYearRange } from '../Interfaceses/IYearRange'
import Nouislider from 'nouislider-react'
import styles from './../styles/titleFilter.module.css'
import { ISelectData } from './../Interfaceses/ISelectData'
import { IGenere } from './../Interfaceses/IGenere'
import { IFilterData } from './../Interfaceses/IFilterData'
import Select from './Select'
import { ITitleStatus } from './../Interfaceses/ITitleStatus'
import { ITitleType } from './../Interfaceses/ITitleType'
import { stringify } from 'querystring'
import yearExtractor from './../helperFunctions/yearExtractor'

export interface TitleFilterProps {
  filterData: IFilterData
  preview?: boolean
}

export interface TitleFilterState {
  filter: ITitleFilter
  preview: boolean
}

class TitleFilter extends React.Component<TitleFilterProps, TitleFilterState> {
  state: TitleFilterState = {
    filter: {
      releaseRange: {
        from: new Date(12, 12, 1, 22),
        to: new Date(12, 12, 1, 22),
      },
      generes: [],
      titleType: null,
      titleStatus: null,
    },
    preview: false,
  }
  componentDidMount() {
    const state = { ...this.state }
    const { preview } = { ...this.props }
    if (typeof preview !== 'undefined') state.preview = preview

    this.setState(state)
  }
  private handleGenreChange = (selectedOption: any) => {
    const options = selectedOption as Array<IGenere>
    const filter = {
      ...this.state.filter,
    }
    filter.generes = options
    this.setState({ filter })
  }
  private handleStatusChange = (selectedOption: any) => {
    const status = selectedOption as ITitleStatus
    const filter = {
      ...this.state.filter,
    }
    filter.titleStatus = status
    this.setState({ filter })
  }
  private handleTypeChange = (selectedOption: any) => {
    const type = selectedOption as ITitleType
    const filter = {
      ...this.state.filter,
    }
    filter.titleType = type
    this.setState({ filter })
  }
  private slideHandler = (data: Array<string>) => {
    const filter = {
      ...this.state.filter,
    }

    //filter.yearRange = yearExtractor(data)
    this.setState({ filter })
  }
  render() {
    const filter = { ...this.state.filter }
    const filterData = { ...this.props.filterData }
    const sliderFormatter = {
      to: function (value: number) {
        return `Год ${Math.trunc(value)}`
      },
      from: function (value: string) {
        return parseInt(value)
      },
    }
    let props = { ...this.props.filterData }
    return (
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.filterTitleContainer}>
            <span className={styles.filterTitle}>Фильтр</span>
          </div>
          <div className={styles.filterContainer}>
            <div className={styles.slider}>
              {/* Styles in App.css */}
              <Nouislider
                range={{ min: props.yearRange.from, max: props.yearRange.to }}
                start={[props.yearRange.from, props.yearRange.to]}
                pips={{ mode: 'range', density: 5 }}
                connect={true}
                format={sliderFormatter}
                tooltips={true}
                className={styles.sliderInfo}
                onSlide={this.slideHandler}
              />
            </div>

            <Select
              options={filterData.types}
              isMulti={false}
              title="Тип"
              onChange={this.handleTypeChange}
              placeHolder="Выберете тип"
            />
            <Select
              options={filterData.generes}
              isMulti={true}
              title="Жанры"
              onChange={this.handleGenreChange}
              placeHolder="Выберете жанры"
            />
            <Select
              options={filterData.statuses}
              isMulti={false}
              title="Статус"
              onChange={this.handleStatusChange}
              placeHolder="Выберете статус"
            />
            {this.props.preview ? (
              <button className={styles.button}>Поиск</button>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default TitleFilter
