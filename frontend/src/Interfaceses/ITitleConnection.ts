import { ITitleType } from './ITitleType'
export interface ITitleConnection {
  name: string
  posterUrl: string
  releaseYear: number
  episodesCount?: number
  connectionState: string
  titleTypeName: string
}
