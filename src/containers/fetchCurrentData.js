import React, { Component } from "react";
import axios from "../axiosWeather";
import styles from "./fetchCurrentData.module.css";

class FetchCurrentData extends Component {
  state = {
    name: "",
    date: "",
    icon: "",
    temp: "",
    feelsLike: "",
    humidity: "",
    uvi: "",
    desc: "",
  };

  componentDidMount() {
    const getRequest = async () => {
      try {
        await axios.get().then((resp) => {
          const current = resp.data.current;

          const name = resp.data.timezone;
          const date = new Date(current.dt * 1000);
          const desc = current.weather[0].description;
          const iconName = current.weather[0].icon;
          const iconApi =
            "http://openweathermap.org/img/w/" + iconName + ".png";
          const temp = current.temp;
          const feelsLike = current.feels_like;
          const humidity = current.humidity;
          const uvi = current.uvi;

          this.setState({
            name: name,
            date: date.toDateString(),
            icon: iconApi,
            desc: desc,
            temp: temp,
            feelsLike: feelsLike,
            humidity: humidity,
            uvi: uvi,
          });
        });
      } catch (err) {
        console.error(err);
      }
    };
    getRequest();
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.main}>
          <h3>CURRENT WEATHER</h3>
          <div>{this.state.name}</div>
          <div>{this.state.date}</div>
        </div>
        <div className={styles.img}>
          <img
            className={styles.img}
            style={{ width: "50px" }}
            src={this.state.icon}
            alt="Sky"
          />
        </div>
        <span>Temperatures</span>
        <div className={styles.temperatures}>
          <div>Actual: {Math.round(this.state.temp)}&deg;</div>
          <div>Feels: {Math.round(this.state.feelsLike)}&deg;</div>
        </div>
        <span>Details</span>
        <div className={styles.details}>
          <div>Humidity: {this.state.humidity}%</div>
          <div>UVI: {this.state.uvi}</div>
          <div> {this.state.desc}</div>
        </div>
      </div>
    );
  }
}
export default FetchCurrentData;
