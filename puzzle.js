import React, { Component } from 'react';
import jsonData from 'data.json'; // Sesuaikan dengan lokasi file JSON

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: jsonData, // Menggunakan data dari JSON
    };
  }

  handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [inputName]: inputValue,
      },
    }));
  };

  componentDidMount() {
    for (const key in this.state.data) {
      if (this.state.data.hasOwnProperty(key)) {
        const inputElement = document.getElementById(key);
        if (inputElement) {
          inputElement.addEventListener('input', this.handleChange);
        }
      }
    }
  }

  render() {
    return (
      <div>
        {Object.keys(this.state.data).map((key) => (
          <input
            key={key}
            id={key}
            name={key}
            type="text"
            placeholder={key}
            value={this.state.data[key]}
          />
        ))}
      </div>
    );
  }
}

export default MyComponent;
