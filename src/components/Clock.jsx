import React, { Component } from 'react'

function FormattedDate(props) {
  return <h3>{props.date.toLocaleTimeString()}</h3>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <FormattedDate date={this.state.date} />
        <br></br>
      </div>
    );
  }
}

export default Clock;