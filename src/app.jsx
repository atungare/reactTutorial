"use strict";

var React = require('react');

var box_style = {
  height: '100px',
  width: '100px'
}

var Box = React.createClass({
  render: function () {
    return (
      <button style={box_style}>{this.state.value}</button>
    );
  },
  getInitialState: function () {
    return {
      value: 'X'
    };
  }
});

React.render(<Box />, document.body);
