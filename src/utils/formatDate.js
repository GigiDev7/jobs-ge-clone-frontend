const formatDate = (str) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(str);
  const day = date.getDate();
  const monthNum = date.getMonth();
  const month = monthNames[monthNum];
  const nextMonth = monthNames[monthNum + 1];

  return { day, month, nextMonth };
};

export default formatDate;
