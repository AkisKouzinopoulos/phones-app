import React, { Component } from 'react';

class FilterCheckboxes extends Component {

  state = { // Define the filters i want ot have in the page so i create the checkboxes
    'Android': false,
    'FM radio': false,
    'Video messaging': false,
    'Touchscreen': false
  }

  handleCheckbox = (e) => {
    let { name: fieldName } = e.target;
    this.setState({
      [fieldName]: e.target.checked
    });
  }

  getSelectedOnly = (obj) => {
    const selectedValues = Object.keys(obj).filter(item => {
      return (
        obj[item]
      )
    })
    this.props.onFilter(selectedValues); //Pass the state object
  }

  render() {

    // this.props.onFilter(this.state); //Pass the state object
    this.getSelectedOnly(this.state);

    const checkBoxesToRender = Object.keys(this.state).map(item => {
      return (
        <div
          key={item}
        >
          <label htmlFor="{item}"> {item} </label>
          <input
            type="checkbox"
            id={item}
            name={item}
            value={item}
            onChange={this.handleCheckbox}
          />
        </div>
      )
    })

    return (
      <div className="checkboxes-container">
        {checkBoxesToRender}
      </div>
    )
  }
}

export default FilterCheckboxes;