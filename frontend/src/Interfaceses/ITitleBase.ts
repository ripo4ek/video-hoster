import { IGenere } from './IGenere'
export interface ITitleBase {
  id: number
  name: string
  posterUrl: string
  treeId: number
  TitleInfoId: number
  userRating: number
  generes: Array<IGenere>
}
