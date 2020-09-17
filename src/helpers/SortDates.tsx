import data from "../components/data/data.json";

export const sortDates = () => {
  const Moment = require("moment");
  const dates = data;
  return dates.sort(
    (a, b) =>
      new Moment(a.date).format("YYYYMMDD") -
      new Moment(b.date).format("YYYYMMDD")
  );
};
