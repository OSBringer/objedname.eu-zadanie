import React, { useState } from "react";
import Cell from "./Cell/Cell";
import data from "/src/assets/data.json";
import "./Calendar.scss";
import Controller from "./Controller/Controller";
import { useSelector } from "react-redux";
import {
  getDateAndDay,
  isBetweenTimes,
  isToday,
} from "../../utils/helperFunctions";

function Calendar(props) {
  const openingDays = useSelector((state) => state.value.openingDays);
  const [active, setActive] = useState(new Date());
  const [chosenTime, setChosenTime] = useState("");
  return (
    <div className="timedOrdersView">
      <Controller active={active} setActive={(e) => setActive(e)} />
      <div className="time-select-container">
        {/* {Object.keys(openingDays).map((day) => (
          <div key={day}>
            <h3>{day}</h3>
            <p>From: {openingDays[day].from}</p>
            <p>To: {openingDays[day].to}</p>
          </div>
        ))} */}

        {data.Data.map(
          (item, index) =>
            isBetweenTimes(
              openingDays[getDateAndDay(active)[1]].from,
              openingDays[getDateAndDay(active)[1]].to,
              item.Time
            ) && (
              <Cell
                key={index}
                onClick={() => setChosenTime(item.Time)}
                active={chosenTime === item.Time}
                time={item.Time}
                capacity={item.Capacity}
                originalCapacity={item.OriginalCapacity}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Calendar;
