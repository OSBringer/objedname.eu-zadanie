import React from "react";
import "../Calendar.scss";

interface CellProps {
  time: string;
  capacity: number;
  onClick?: () => void;
  active: boolean;
  originalCapacity: number;
}

function Cell(props: CellProps) {
  const isValidTimeFormat = (time) => {
    // Regular expression to check for format "HH:mm" (e.g., "14:00")
    const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
    return timeRegex.test(time);
  };

  if (!isValidTimeFormat(props.time)) {
    // Handle the case when the time format is incorrect
    return <div className="error">Invalid time format</div>;
  }

  return (
    <div
      onClick={props.onClick}
      style={{ backgroundColor: props.active ? "#26c672" : "" }}
      className={`time-select`}
    >
      {props.time}
      <span className="availability">
        ({props.capacity}/{props.originalCapacity})
      </span>
    </div>
  );
}

export default Cell;
