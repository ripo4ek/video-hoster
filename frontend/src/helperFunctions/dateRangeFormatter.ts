import { IDateRange } from "./../Interfaceses/IDateRange";
import moment from "moment";
import "moment/locale/ru";
export default (dateRange: IDateRange): string => {
  const from = moment(dateRange.from).locale("ru");
  const to = moment(dateRange.to).locale("ru");

  return `C ${from.format("D MMMM")} по ${to.format("D MMMM")}`;
};
