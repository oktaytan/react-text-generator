import React, { Component } from 'react';

class Output extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  render() {
    return (
      <div className='mt-4 bg-light p-3 rounded-lg border border-info'>
        <p className='well text-dark text-capitalize'>{this.props.value}</p>
      </div>
    );
  }
}

export default Output;
