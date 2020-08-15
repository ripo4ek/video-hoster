import { IDateRange } from './IDateRange'
import { IGenere } from './IGenere'
import { ITitleType } from './ITitleType'
import { ITitleStatus } from './ITitleStatus'

export interface ITitleFilter {
  releaseRange?: IDateRange | null
  generes?: Array<IGenere> | null
  titleType?: ITitleType | null
  titleStatus?: ITitleStatus | null
  filterBy?: string | null
  skipItems?: number
  itemsToTake?: number
}
