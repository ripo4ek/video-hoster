import moment from 'moment'
import { ITitleBase } from './../Interfaceses/ITitleBase'
import { ITitleDropdownList } from './../Interfaceses/ITitleDropdownList'
import 'moment/locale/ru'
import dateFormatter from './dateFormatter'
import capitalize from './capitalize'

//TODO: Избавиться от Code Polution

export interface GroupEntity {}

export let createScheduleChunk = (
  entities: Array<ITitleBase>,
): Array<ITitleDropdownList> => {
  let result: Array<ITitleDropdownList> = []

  entities.forEach((element: ITitleBase) => {
    const date = capitalize(
      moment(element.episodeReleaseTime).locale('ru').format('dddd'),
    )
    addTitle(result, date, element)
  })
  return result
}

export let createLastUpdatedChunk = (
  entities: Array<ITitleBase>,
): Array<ITitleDropdownList> => {
  let result: Array<ITitleDropdownList> = []

  entities.forEach((element: ITitleBase) => {
    const date = dateFormatter(element.lastUpdated)
    addTitle(result, date, element)
  })
  return result
}

let contains = (array: Array<ITitleDropdownList>, selector: string) =>
  array.filter((elementCat) => elementCat.name === selector).length > 0

let getFirstList = (array: Array<ITitleDropdownList>, selector: string) =>
  array.filter((elementCat) => elementCat.name === selector)[0]

let addTitle = (
  array: Array<ITitleDropdownList>,
  selector: string,
  element: ITitleBase,
) => {
  if (contains(array, selector)) {
    let list = getFirstList(array, selector)
    list.titleElements.push(element)
  } else {
    array.push({ name: selector, titleElements: [element] })
  }
}
