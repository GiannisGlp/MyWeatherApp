import React, { Component } from "react";
import HourWeather from "../Components/hourWeather/hourWeather";
import axios from "../axiosWeather";

class FetchCurrentData extends Component {
  state = {
    hours: [],
  };

  componentDidMount() {
    const getHoursRequest = async () => {
      try {
        await axios.get().then((resp) => {
          const hours = resp.data.hourly.slice(1, 6);
          const updatedHours = hours.map((hour) => {
            return {
              ...hour,
            };
          });
          this.setState({ hours: updatedHours });
        });
      } catch (err) {
        console.error(err);
      }
    };
    getHoursRequest();
  }
  render() {
    let hours = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      hours = this.state.hours.map((hour) => {
        return (
          <HourWeather
            key={hour.dt}
            dt={hour.dt}
            icon={hour.weather[0].icon}
            temp={hour.temp}
            description={hour.weather[0].description}
            humidity={hour.humidity}
          />
        );
      });
    }
    return <section>{hours}</section>;
  }
}
export default FetchCurrentData;
