import React from "react";
import '../styles/Banner.css';

export class Banner extends React.Component{
  render() {
    return (
      <div className="Banner">
        <div className="banner__flex">
          <div className="banner__text">Where do you want to land?</div>
          <div className="banner__form">
            <form action="#" onSubmit={this.props.onSubmit}>
              <input type="text" />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

