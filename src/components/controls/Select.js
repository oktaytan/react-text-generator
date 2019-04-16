import React, { Component } from 'react';

class Select extends Component {
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
        <select className='form-control' onChange={this.handleChange}>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>
      </div>
    );
  }
}

export default Select;
