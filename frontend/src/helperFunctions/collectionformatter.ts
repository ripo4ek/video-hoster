import { INamedEntity } from './../Interfaceses/INamedEntity'

export let formatter = (data: Array<string>): Array<string> => {
  let res = data.slice(0, -1).map((element) => `${element},`)
  res.push(data[data.length - 1])
  return res
}
export let formatterObject = (data: Array<INamedEntity>): Array<string> => {
  let res = data.slice(0, -1).map((element) => `${element.name},`)
  res.push(data[data.length - 1].name)
  return res
}
