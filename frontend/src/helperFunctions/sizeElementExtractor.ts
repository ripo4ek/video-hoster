export default (data: string): number => {
  var numberPattern = /\d+/g;
  let resData = data.match(numberPattern);
  if (resData !== null) {
    return Number(resData.join("."));
  }
  throw new Error("Invalid Data");
};
