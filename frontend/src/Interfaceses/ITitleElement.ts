import { IGenere } from './IGenere'

export interface ITitleElement {
  id: number
  name: string
  posterUrl: string
  description: string
  generes: Array<IGenere>
}
