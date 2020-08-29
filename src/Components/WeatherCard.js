import React, { Component } from "react";
import '../styles/WeatherCard.css';

var weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export class WeatherCard extends Component {
  render() {
    const {data} = this.props;
    let day = (new Date()).getDay();
    console.log(data)
    return (
      <div className="WetherCard">
        <div className="weather__city">
          {data.name}
        </div>
        <div className="wether__day">
          {weekDays[day]}
        </div>
        <div className="wether__temp">
          Temperature: {((data.main.temp - 273.15) * 9 / 5 + 32).toFixed(0)}&deg;F
        </div>
        <div className="wether__condition">
          Condition: {data.weather[0].description}
        </div>
        <div className="wether__img">
          <img src={'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png'} alt={data.id} />
        </div>
      </div>
    );
  }
}

export default WeatherCard;
