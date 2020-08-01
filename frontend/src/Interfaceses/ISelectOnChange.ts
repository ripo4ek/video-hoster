import { ISelectData } from './ISelectData'
export interface ISelectOnChange {
  (selectedData: Array<ISelectData>): void
}
