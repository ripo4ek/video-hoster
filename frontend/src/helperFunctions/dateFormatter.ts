import moment from 'moment'
import 'moment/locale/ru'
export default (date: Date): string => {
  const locale = moment(date).locale('ru')

  return locale.format('D MMMM YYYY')
}
