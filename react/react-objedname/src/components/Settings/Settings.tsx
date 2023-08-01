import React, { useState } from "react";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import "./Settings.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setOppeningHours,
  setCalendarDays,
} from "../../features/settings/settingsSlice";
import Button from "../Button/Button";
function Settings() {
  const days = [
    "Pondelok",
    "Utorok",
    "Streda",
    "Štvrtok",
    "Piatok",
    "Sobota",
    "Nedeľa",
  ];
  const openingHours = useSelector((state) => state.value.openingDays);
  const calendarDays = useSelector((state) => state.value.calendarDays);
  const dispatch = useDispatch();

  const [oppeningHrs, setOppeningHrs] = useState(openingHours);
  const [calendarDaysAhead, setCalendarDaysAhead] = useState(calendarDays);
  const handleTimeChange = (
    timeValue: string,
    id: number,
    type: "from" | "to"
  ) => {
    setOppeningHrs((prevOpeningHrs) => ({
      ...prevOpeningHrs,
      [days[id]]: {
        ...prevOpeningHrs[days[id]],
        [type]: timeValue,
      },
    }));
  };

  const handleCalendarDaysChange = (e: any) => {};

  const handleSave = () => {
    dispatch(setOppeningHours(oppeningHrs));
    dispatch(setCalendarDays(calendarDaysAhead));
  };

  return (
    <div className="settingsContainer">
      <div className="settingsDays">
        {days.map((day, index) => (
          <div className="timePickerContainer" key={index}>
            <h4>{day}</h4>
            <div className="timePickerWrapper">
              <b>Od</b>{" "}
              <TimePicker
                className="timePicker"
                onChange={(e) => handleTimeChange(e, index, "from")}
                value={oppeningHrs[day].from}
                disableClock
              />
            </div>
            <div className="timePickerWrapper">
              <b>Do</b>{" "}
              <TimePicker
                minTime={oppeningHrs[day].from}
                className="timePicker"
                onChange={(e) => handleTimeChange(e, index, "to")}
                value={oppeningHrs[day].to}
                disableClock
              />
            </div>
          </div>
        ))}
      </div>
      <div className="settingsType">
        <h1>Kalendar</h1>
        <label htmlFor="xd">Zobraziť dni dopredu</label>
        <input
          className="customInput react-time-picker react-time-picker--closed react-time-picker--enabled timePicker"
          onChange={(e) => setCalendarDaysAhead(parseInt(e.target.value))}
          name="xd"
          max={5}
          min={1}
          defaultValue={calendarDaysAhead}
          type="number"
          id="xd"
        ></input>
      </div>
      <Button onClick={handleSave} text="Uložiť" />
    </div>
  );
}

export default Settings;
