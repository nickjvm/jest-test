// Copyright 2004-present Facebook. All Rights Reserved.

import React from 'react';

export default class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state = {label: props.label};

    // bind manually because React class components don't auto-bind
    // http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({label: 'clicked'});
  }

  render() {
    return (
      <button onClick={this.onClick}>{this.state.label}</button>
    );
  }
}
// component_11
