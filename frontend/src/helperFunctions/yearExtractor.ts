//переписать
export default (data: Array<string>) => {
  if (data.length > 2) throw new Error('More than 2 values in range')
  let result = new Array<number>()
  data.forEach((element) => {
    let wordArray = element.split(' ')
    if (wordArray.length > 2) throw new Error('String is not typical')
    result.push(parseInt(wordArray[1]))
  })
  return { from: result[0], to: result[1] }
}
