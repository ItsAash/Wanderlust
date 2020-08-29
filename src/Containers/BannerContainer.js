import React, { Component } from 'react';
import { Banner } from '../Components/Banner';
import ResultContainer from './ResultContainer';


export class BannerContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchQuery : '', 
      isSubmitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const inputValue = e.target.querySelector('input[type="text"]').value;
    console.log(inputValue);
    this.setState({
      isSubmitted: true,
      searchQuery: inputValue
    })
  }
  
  render() {
    return (
      <div className="BannerContainer">
        <Banner onSubmit={this.handleSubmit} />
        {this.state.isSubmitted && <ResultContainer query={this.state.searchQuery} />}
      </div>
    )
  }
}