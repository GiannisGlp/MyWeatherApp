import React from "react";
import styles from "./dailyWeather.module.css";

const dailyWeather = (props) => {
  const iconName = props.icon;
  const iconURL = "http://openweathermap.org/img/w/" + iconName + ".png";
  const date = new Date(props.dt * 1000);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>{date.toDateString()}</div>
      </div>
      <div className={styles.img}>
        <img className={styles.img} src={iconURL} alt="Sky" />
      </div>
      <span>Temperatures</span>
      <div className={styles.temperatures}>
        <div>Day : {Math.round(props.tempDay)}&deg;</div>

        <div>Night : {Math.round(props.tempNight)}&deg;</div>
      </div>
      <div className={styles.realfeel}>
        <div>Feels: {Math.round(props.feelsLikeDay)}&deg;</div>
        <div>Feels: {Math.round(props.feelsLikeNight)}&deg;</div>
      </div>
      <span>Details</span>
      <div className={styles.details}>
        <div>Humidity: {props.humidity}%</div>
        <div>UVI: {props.uvi}</div>
        <div> {props.weather}</div>
      </div>
      <hr />
    </div>
  );
};

export default dailyWeather;
