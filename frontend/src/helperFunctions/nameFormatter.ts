export default function (strName: string) {
  const possibleLength: number = 14

  if (strName.length < possibleLength) return strName
  return strName.substring(0, possibleLength) + '...'
}
