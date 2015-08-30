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
    var new_state = {};
    if (this.state.value === 'X') {
      new_state.value = "O"
    } else if (this.state.value === 'O') {
      new_state.value = "X"
    }
    this.setState(new_state)
  },
  componentDidMount: function () {
    setInterval(this.updateTextValue, 300);
  }
});

React.render(<Box />, document.body);
