import React from "react";
import AttractionCard from "../Components/AttractionCard";
import "../styles/ResultContainer.css";

import WeatherCard from "../Components/WeatherCard";

var foursquare = require("react-foursquare")({
  clientID: "PU3IY1PZEOOANTPSHKNMS5HFSMEGEQ1IAVJYGYM4YVZP3NGD",
  clientSecret: "0V21IXU0EETE3SZJGGCP4T4R13NUTBJ0LMI5WQY45IMDPEKY",
});

class ResultContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFound: true,
      items: [],
      params: {
        near: this.props.query,
        limit: 3,
      },
      data: [],
    };
  }

  async componentDidMount() {
    await this.makeFoursquareRequest();
    await this.makeWeatherRequest();
  }

  async makeWeatherRequest() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?&q=${this.state.items[0].venue.location.city}&APPID=45dc1d2e92f646d108fe518401d1e210`
      );
      if (response.ok) {
        const jsonRes = await response.json();
        this.setState({ data: [jsonRes] });
      } else {
        this.setState({ isFound: false });
      }
    } catch (err) {
      this.setState({ isFound: false });
    }
  }

  async makeFoursquareRequest() {
    var found;
    const res = await foursquare.venues.explore(this.state.params);
    if (res.meta.code !== 200) {
      found = false;
    } else {
      found = true;
    }
    this.setState({ items: res.response.groups[0].items, isFound: found });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps === this.props) return;
    await this.makeFoursquareRequest();
    await this.makeWeatherRequest();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.query !== prevState.params.near) {
      return {
        params: {
          near: nextProps.query,
          limit: 3,
        },
      };
    }
    return null;
  }

  render() {
    if (!this.state.isFound) {
      return (
        <div className="ResultContainer">
          <span className="errorMsg">Cannot Found!</span>
        </div>
      );
    }
    return (
      <div className="ResultContainer">
        <div className="title">
          Current Weather
        </div>
        <div className="weather__container">
          {this.state.data.map((d) => {
            return <WeatherCard data={d} key={d.id} />;
          })}
        </div>
        <div className="title">TOP ATTRACTIONS</div>
        <div className="TopAttraction">
          {this.state.items.map((item) => {
            return <AttractionCard venue={item.venue} key={item.venue.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default ResultContainer;
