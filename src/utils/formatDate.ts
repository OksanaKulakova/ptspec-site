const formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat("ru", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const formatDate = (date: string): string => {
  const fDate: string = formatter.format(new Date(date));
  return fDate.replace(/г./g, "");
};

export default formatDate;
