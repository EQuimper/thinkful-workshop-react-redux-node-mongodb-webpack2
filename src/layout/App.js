import React, { Component } from 'react';
import Title from '../components/Title';

class App extends Component {
  static defaultProps = {
    name: 'Thinkful'
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

  _renderWithoutChildren() {
    return (
      <div>
        <Title>This is a title</Title>
        <h5>{this.state.message}</h5>
      </div>
    )
  }

  render() {
    if (this.props.location.pathname === '/') {
      return this._renderWithoutChildren()
    }
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
