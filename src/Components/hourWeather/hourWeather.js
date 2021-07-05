import React from "react";
import styles from "./hourWeather.module.css";

const hourWeather = (props) => {
  const date = new Date(props.dt * 1000);
  let hours = date.getHours() + ":" + date.getMinutes();

  const iconName = props.icon;
  const iconURL = "http://openweathermap.org/img/w/" + iconName + ".png";

  return (
    <div className={styles.container}>
      <div className={styles.item}>{hours}</div>
      <div className={styles.item}>{Math.round(props.temp)}&deg;</div>
      <div className={styles.item}>{props.humidity}%</div>
      <div className={styles.item}>
        <img style={{ width: "30px" }} src={iconURL} alt="Sky" />
      </div>
      <div className={styles.item}>{props.description}</div>
      <br />
    </div>
  );
};

export default hourWeather;
