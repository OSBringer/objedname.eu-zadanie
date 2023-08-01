export const getDateAndDay = (date: Date): [Date, string] => {
  const futureDate: Date = new Date(date);
  futureDate.setDate(futureDate.getDate());

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

export const getMinutes = (time: string) => {
  const [hours, minutes] = time
    .split(":")
    .map((value) => (value[0] === "0" ? value[1] : value));
  return +hours * 60 + +minutes;
};
export const convertTimeToHHMM = (timeObj: Object) => {
  const hours = String(timeObj.hours).padStart(2, "0");
  const minutes = String(timeObj.minutes).padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const isBetweenTimes = (
  from: string,
  to: string,
  time: string
): boolean => {
  const startTimeInMinutes = getMinutes(from);
  const endTimeInMinutes = getMinutes(to);
  const timeInMinutes = getMinutes(time);
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

export const findIndexOfTime = (
  dataArray: Array<Object>,
  targetTime: string
) => {
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].Time === targetTime) {
      return i;
    }
  }
  // If the targetTime is not found in the array, return -1 to indicate it was not found.
  return false;
};

export const formatDateWithoutYear = (date: Date) => {
  const options = { day: "numeric", month: "numeric" };
  return new Intl.DateTimeFormat("sk-SK", options).format(date);
};

export const isValidTimeFormat = (time: string) => {
  // Regular expression to check for format "HH:mm" (e.g., "14:00")
  const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  return timeRegex.test(time);
};
