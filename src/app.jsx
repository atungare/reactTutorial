"use strict";

var React = require('react');

var box_style = {
  height: '100px',
  width: '100px'
}

var Box = React.createClass({
  render: function () {
    return (
      <button style={ box_style }>{ this.state.value }</button>
    );
  },
  getInitialState: function () {
    return {
      value: 'X'
    };
  },
  updateTextValue: function () {
    var new_state = {
      value: this.state.value === 'X' ? 'O' : 'X'
    };
    this.setState(new_state);
  },
  componentDidMount: function () {
    this.timer = setInterval(this.updateTextValue, 300);
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
  }
});

React.render(<Box />, document.body);
