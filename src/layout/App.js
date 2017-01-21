import React, { Component } from 'react';

class App extends Component {
  static defaultProps = {
    name: 'Emanuel'
  }

  state = {
    team: 'Thinkful',
    dots: []
  }

  componentDidMount() {
    this._setToggleTimeout();
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  _setToggleTimeout() {
    this._timer = setInterval(() => {
      if (this.state.dots.length === 3) {
        this.setState({ dots: [] });
      } else {
        this.setState({ dots: [...this.state.dots, '.'] });
      }
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <h3>And welcome {this.state.team}</h3>
        <h5>App in contructions</h5>
        <hr />
        <h1>Loading {this.state.dots}</h1>
      </div>
    );
  }
}

export default App;
