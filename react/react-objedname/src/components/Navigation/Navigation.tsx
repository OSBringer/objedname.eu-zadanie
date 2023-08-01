import React from "react";
import Button from "../Button/Button";
import "./Navigation.scss";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineHistory } from "react-icons/ai";
interface NavigationProps {
  setPage: CallableFunction;
  page?: string;
}

function Navigation(props: NavigationProps) {
  return (
    <div className="navigationContainer">
      <Button
        icon={<AiOutlineUser />}
        onClick={() => props.setPage("settings")}
        active={props.page === "settings"}
      />
      <Button
        icon={<AiOutlineStar />}
        onClick={() => props.setPage("favourites")}
        active={props.page === "favourites"}
      />
      <Button
        icon={<AiOutlineHistory />}
        onClick={() => props.setPage("history")}
        active={props.page === "history"}
      />
      <Button
        icon={<AiOutlineCalendar />}
        onClick={() => props.setPage("callendar")}
        active={props.page === "callendar"}
      />
    </div>
  );
}

export default Navigation;
