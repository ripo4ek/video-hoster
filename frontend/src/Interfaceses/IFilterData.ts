import { IGenere } from './IGenere'
import { ITitleType } from './ITitleType'
import { ITitleStatus } from './ITitleStatus'
import { IYearRange } from './IYearRange'

export interface IFilterData {
  generes: Array<IGenere>
  types: Array<ITitleType>
  statuses: Array<ITitleStatus>
  yearRange: IYearRange
}
