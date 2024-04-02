/**
 * @param {Date} date
 * @returns {string}
 */

export const toDateFormat = (date) => {
  const formatter = new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" });
  formatter.format;
  const [{ value: year }, , { value: month }, , { value: day }] = formatter.formatToParts(date);

  return `${year}-${month}-${day}`;
};

/** @returns {Date} */
export const getYesterday = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  return yesterday;
};
