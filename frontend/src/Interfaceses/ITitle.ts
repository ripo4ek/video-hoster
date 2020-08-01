import { ITitleBase } from './ITitleBase'
import { ITitleDetails } from './ITitleDetails'
import { IEpisode } from './IEpisode'
import { ITitleConnection } from './ITitleConnection'
export interface ITitle {
  titleBase: ITitleBase
  titleDetails: ITitleDetails
  titleConnections: Array<ITitleConnection>
}
