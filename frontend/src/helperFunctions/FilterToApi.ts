import { ITitleFilter } from './../Interfaceses/ITitleFilter'
import { IFilterApi } from './../Interfaceses/IFilterApi'

export default (filter: ITitleFilter): IFilterApi => ({
  releaseFrom: filter.releaseRange?.from.toJSON(),
  releaseTo: filter.releaseRange?.to.toJSON(),
  genereIds: filter.generes?.map((g) => g.id),
  titleTypeId: filter.titleType?.id,
  titleStatusId: filter.titleStatus?.id,
  filterBy: filter.filterBy,
  skipItems: filter.skipItems,
  itemsToTake: filter.itemsToTake,
})
