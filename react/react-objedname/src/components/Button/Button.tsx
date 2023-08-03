import React from "react";
import "./Button.scss";
import { MdCheck } from "react-icons/md";

function Button({ text, onClick, className, icon, active }) {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {text}
      <span>{icon}</span>

      {active && !className?.includes("day") && <MdCheck className="active" />}

      <span className={icon}></span>
    </button>
  );
}

export default Button;
