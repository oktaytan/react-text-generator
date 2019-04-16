import React, { Component } from 'react';

class Text extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState(
      {
        value: e.target.value
      },
      () => this.props.onChange(this.state.value)
    );
  }

  render() {
    return (
      <div>
        <input
          type='number'
          className='form-control'
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Text;
