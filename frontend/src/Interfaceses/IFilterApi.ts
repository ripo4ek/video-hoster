export interface IFilterApi {
  releaseFrom?: string | null
  releaseTo?: string | null
  genereIds?: Array<string> | null
  titleTypeId?: string | null
  titleStatusId?: string | null
  filterBy?: string | null
  skipItems?: number
  itemsToTake?: number
}
