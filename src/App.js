import React, { Component } from 'react';
import './App.css';
import aixos from 'axios';

import Output from './components/Output';
import Select from './components/controls/Select';
import Text from './components/controls/Text';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paras: 4,
      html: true,
      text: ''
    };
  }

  componentDidMount() {
    this.getSampleText();
  }

  getSampleText = () => {
    aixos
      .get(
        `https://cors-anywhere.herokuapp.com/http://hipsterjesus.com/api?paras=${+this
          .state.paras}&html=${this.state.html}`
      )
      .then(res => {
        this.setState({
          text: res.data.text
        });
      })
      .catch(err => console.log(err));
  };

  showHtml(x) {
    this.setState({ html: x }, this.getSampleText);
  }

  changeParas(number) {
    this.setState({ paras: number }, this.getSampleText);
  }

  render() {
    return (
      <div className='container mt-5'>
        <h1 className='text-center text-info mb-4'>React JS Text Generator</h1>
        <hr />
        <form className='form-inline d-flex justify-content-center align-items-center mb-5'>
          <div className='form-group'>
            <label className='mr-3 badge badge-info p-3'>Paragraphs :</label>
            <Text
              value={this.state.paras}
              onChange={this.changeParas.bind(this)}
            />
          </div>
          <div className='form-group ml-5'>
            <label className='mr-3 badge badge-info p-3'>Include HTML :</label>
            <Select
              value={this.state.html}
              onChange={this.showHtml.bind(this)}
            />
          </div>
        </form>
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
