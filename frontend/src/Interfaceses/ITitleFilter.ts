import { IYearRange } from './IYearRange'
import { IGenere } from './IGenere'
import { ITitleType } from './ITitleType'
import { ITitleStatus } from './ITitleStatus'

export interface ITitleFilter {
  yearRange: IYearRange
  generes?: Array<IGenere>
  titleType?: ITitleType | null
  titleStatus?: ITitleStatus | null
}
