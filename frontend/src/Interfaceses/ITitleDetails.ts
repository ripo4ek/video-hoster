import { ITitleType } from './ITitleType'
import { ITitleStatus } from './ITitleStatus'
import { IDateRange } from './IDateRange'
import { IEpisode } from './IEpisode'
export interface ITitleDetails {
  titleType: ITitleType
  eposodesCount: number
  titleStatus: ITitleStatus
  releaseDateRange: IDateRange
  episodeDuration: number
  description: string
  screenshots: Array<string>
  episodes: Array<IEpisode>
}
