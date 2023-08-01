// const [days, setDays] = useState([]);

// const getMinutes = (time: string): number => {
//   const [hours, minutes] = time.split(":").map(Number);

//   return hours * 60 + minutes;
// };

// const isBetweenTimes = (
//   startTime: string,
//   endTime: string,
//   time: string
// ): boolean => {
//   const startTimeInMinutes = getMinutes(startTime);
//   const endTimeInMinutes = getMinutes(endTime);
//   const timeInMinutes = getMinutes(time);

//   return (
//     startTimeInMinutes <= timeInMinutes && timeInMinutes <= endTimeInMinutes
//   );
// };

// const isBetweenTimesExcludingStart = (
//   startTime: string,
//   endTime: string,
//   time: string
// ): boolean => {
//   const startTimeInMinutes = getMinutes(startTime);
//   const endTimeInMinutes = getMinutes(endTime);
//   const timeInMinutes = getMinutes(time);

//   return (
//     startTimeInMinutes < timeInMinutes && timeInMinutes <= endTimeInMinutes
//   );
// };

export const getDateAndDay = (date: Date): [Date, string] => {
  const futureDate: Date = new Date(date);
  futureDate.setDate(futureDate.getDate());

  // Get the day of the week for the future date
  const daysOfWeek: string[] = [
    "Pondelok",
    "Utorok",
    "Streda",
    "Štvrtok",
    "Piatok",
    "Sobota",
    "Nedeľa",
  ];
  const dayOfWeek: string = daysOfWeek[futureDate.getDay()];
  return [futureDate, dayOfWeek];
};

export const isToday = (date: Date): boolean => {
  const today = new Date();

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export const getMinutes = (time) => {
  const [hours, minutes] = time
    .split(":")
    .map((value) => (value[0] === "0" ? value[1] : value));
  return +hours * 60 + +minutes;
};

export const isBetweenTimes = (from, to, time): boolean => {
  const startTimeInMinutes = getMinutes(from);
  const endTimeInMinutes = getMinutes(to);
  const timeInMinutes = getMinutes(time);
  console.log(startTimeInMinutes, endTimeInMinutes, timeInMinutes);

  return (
    startTimeInMinutes <= timeInMinutes && timeInMinutes <= endTimeInMinutes
  );
};

export const getNext10Days = (
  startDate: Date,
  numberOfDays: number
): [Date, string][] => {
  const days: [Date, string][] = [];

  // Get the current date
  const currentDate: Date = startDate;

  for (let i = 0; i < numberOfDays; i++) {
    // Calculate the date i days ahead
    const futureDate: Date = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + i);

    // Get the day of the week for the future date
    const daysOfWeek: string[] = [
      "Nedeľa",
      "Pondelok",
      "Utorok",
      "Streda",
      "Štvrtok",
      "Piatok",
      "Sobota",
    ];
    const dayOfWeek: string = daysOfWeek[futureDate.getDay()];

    days.push([futureDate, dayOfWeek]);
  }

  return days;
};

// const generateDaysAheadFromNow = () => {
//   const now = new Date();
//   const newDays = [];

//   for (let i = 0; i < daysAhead; i++) {
//     const dayDate = new Date(now);
//     dayDate.setDate(dayDate.getDate() + i);

//     const day = dayDate.getDate();
//     const month = dayDate.getMonth() + 1;
//     const year = dayDate.getFullYear();
//     const date = `${day}.${month}.`;
//     const formattedDateWithYear = date + year;

//     const dateWithYear = (function () {
//       const formattedMonth = month < 10 ? `0${month}` : month;
//       const formattedDay = day < 10 ? `0${day}` : day;
//       return `${year}-${formattedMonth}-${formattedDay}`;
//     })();

//     if (isToday(formattedDateWithYear)) {
//       newDays.push({ date: dateWithYear, formattedDate: `Dnes ${date}` });
//     } else if (isTomorrow(formattedDateWithYear)) {
//       newDays.push({ date: dateWithYear, formattedDate: `Zítra ${date}` });
//     } else {
//       const dayShortName = getDayShortName(formattedDateWithYear);
//       newDays.push({
//         date: dateWithYear,
//         formattedDate: `${
//           dayShortName.charAt(0).toUpperCase() + dayShortName.slice(1)
//         } ${date}`,
//       });
//     }
//   }

//   setDays(newDays);
// };
