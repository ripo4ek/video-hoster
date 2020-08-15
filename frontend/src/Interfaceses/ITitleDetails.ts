import { ITitleType } from './ITitleType'
import { ITitleStatus } from './ITitleStatus'
import { IDateRange } from './IDateRange'
import { IEpisode } from './IEpisode'
export interface ITitleDetails {
  episodeDuration: number
  eposodesCount: number
  screenshots: Array<string>
  episodes: Array<IEpisode>
  trailerUrl: string
}
