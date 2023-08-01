import { useState } from "react";

import "./App.css";
import Calendar from "./components/Calendar/Calendar";
import Settings from "./components/Settings/Settings";
import Navigation from "./components/Navigation/Navigation";
import History from "./components/History/History";
function App() {
  const [page, setPage] = useState("calendar");

  const renderSwitch = (page: string) => {
    switch (page) {
      case "calendar":
        return <Calendar />;
      case "settings":
        return <Settings />;
      case "favourites":
        return <div> Favourites </div>;
      case "history":
        return <History />;
      default:
        return <Calendar />;
    }
  };
  return (
    <div>
      <header className="xd">
        <Navigation page={page} setPage={setPage} />
      </header>

      <div className="timed-orders-module">{renderSwitch(page)}</div>
    </div>
  );
}

export default App;
