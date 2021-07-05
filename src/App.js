import React from "react";
import "./App.css";

import Daily from "./containers/fetchDailyData.js";
import Hour from "./containers/fetchHourData.js";
import CurrentWeather from "./containers/fetchCurrentData";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CurrentWeather />
        <hr />
        <h4>HOURLY</h4>
        <Hour />
        <hr />
        <h4>DAILY</h4>
        <Daily />
      </div>
    );
  }
}

export default App;
