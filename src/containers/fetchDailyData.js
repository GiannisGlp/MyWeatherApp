import React, { Component } from "react";
import Page from "../Components/dailyWeather/dailyWeather";
import axios from "../axiosWeather";

class Test extends Component {
  state = {
    pages: [],
  };

  componentDidMount() {
    const getRequest = async () => {
      try {
        await axios.get().then((resp) => {
          const pages = resp.data.daily.slice(1, 6);
          const updatedPages = pages.map((page) => {
            return {
              ...page,
            };
          });
          this.setState({ pages: updatedPages });
        });
      } catch (err) {
        console.error(err);
      }
    };
    getRequest();
  }
  render() {
    let pages = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      pages = this.state.pages.map((page) => {
        return (
          <Page
            key={page.dt}
            dt={page.dt}
            name={this.state.timeZone}
            icon={page.weather[0].icon}
            tempDay={page.temp.day}
            tempNight={page.temp.night}
            feelsLikeDay={page.feels_like.day}
            feelsLikeNight={page.feels_like.night}
            weather={page.weather[0].description}
            humidity={page.humidity}
            uvi={page.uvi}
          />
        );
      });
    }
    return <section>{pages}</section>;
  }
}
export default Test;
