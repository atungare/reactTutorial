"use strict";

var React = require('react');

var box_style = {
  height: '100px',
  width: '100px'
}

var Box = React.createClass({
  render: function () {
    return (
      <button style={ box_style } onClick={ this.updateTextValue }>{ this.state.value }</button>
    );
  },
  getInitialState: function () {
    return {
      value: '-'
    };
  },
  updateTextValue: function () {
    var new_state = {
      value: this.state.value === 'X' ? 'O' : 'X'
    };
    this.setState(new_state);
  },
});

var Row = React.createClass({
  render: function () {
    return (
      <div>
        <Box />
        <Box />
        <Box />
      </div>
    )
  }
});

React.render(<Row />, document.body);
