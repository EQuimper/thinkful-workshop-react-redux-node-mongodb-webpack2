import React, { Component } from 'react';

class App extends Component {
  static defaultProps = {
    name: 'Emanuel'
  }

  state = {
    dots: [],
    loading: false,
    message: null
  }

  async componentDidMount() {
    this._setToggleTimeout();
    this.setState({ loading: true });
    const res = await fetch('/api/v1/hello');
    const data = await res.json();
    this.setState({ loading: false, message: data.message });
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
        <h1>Hello! {this.props.name}</h1>
        <hr />
        {this.state.loading ? (
          <h1>Loading {this.state.dots}</h1>
        ) : (
          <h1>{this.state.message}</h1>
        )}
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default App;
