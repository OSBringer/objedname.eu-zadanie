import React, { useState, useEffect } from "react";
import "../Calendar.scss";
import Button from "../../Button/Button";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { getNext10Days, isToday } from "/src/utils/helperFunctions.tsx";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";

const handleActive = () => {};

function Controller(props) {
  const calendarDays = useSelector((state) => state.value.calendarDays);

  const [startDate, setStartDate] = useState(new Date());
  const [dateArray, setDateArray] = useState(
    getNext10Days(startDate, calendarDays)
  );
  useEffect(() => {
    setDateArray(getNext10Days(startDate, calendarDays));
  }, [calendarDays, startDate]);

  const prevDay = () => {
    const prevDate = new Date(startDate);
    prevDate.setDate(prevDate.getDate() - 1);
    return prevDate;
  };

  const nextDay = () => {
    const nextDate = new Date(startDate);
    nextDate.setDate(nextDate.getDate() + 1);
    return nextDate;
  };

  return (
    <div className="day-select-row">
      <Button
        onClick={() => {
          props.setActive(prevDay);
          setStartDate(prevDay);
        }}
        icon={<MdArrowBackIos />}
        className="btn"
      />
      {/* Tu sa budu dni generovat podla toho kolko ich chceme na stranku z DeliveryMethod */}
      {dateArray.map((day, index) => (
        <>
          <Button
            onClick={() => {
              props.setActive(day[0]);
            }}
            active={day[0].getDate() === props.active.getDate()}
            text={`${day[0].toLocaleDateString("sk-SK")} ${day[1]}`}
          />
        </>
      ))}

      <Button
        onClick={() => {
          props.setActive(nextDay);
          setStartDate(nextDay);
        }}
        icon={<MdArrowForwardIos />}
        className="btn"
      />
    </div>
  );
}

export default Controller;
