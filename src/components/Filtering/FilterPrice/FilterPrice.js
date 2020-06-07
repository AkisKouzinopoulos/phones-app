import React, { Component } from 'react';

import './FilterPrice.css';

class FilterPrice extends Component {

  state = { // Define the filters i want ot have in the page so i create the checkboxes
    price: 0
  }

  handlePriceSelection = (e) => {
    const value = e.target.value;
    const rangeSlider = document.getElementById("rs-range-line");
    const rangeBullet = document.getElementById("rs-bullet");

    const showSliderValue = () => {
      rangeBullet.innerHTML = this.state.price;
      const bulletPosition = (this.state.price / rangeSlider.max);
      rangeBullet.style.left = (bulletPosition * 578) + "px";
    }

    rangeSlider.addEventListener("input", showSliderValue, false);

    this.setState({
      price: value
    });

    this.props.onPriceFilter(value); //Pass the price
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="range-slider">
            <span id="rs-bullet" className="rs-label">0</span>
            <input
              id="rs-range-line"
              className="rs-range"
              type="range"
              value={this.state.price}
              min="0"
              max="200"
              step="1"
              onChange={this.handlePriceSelection}
            />
          </div>
          <div className="box-minmax">
            <span>0</span><span>200</span>
          </div>
        </div>
      </div >
    )
  }
}

export default FilterPrice;