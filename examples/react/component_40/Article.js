// Copyright 2004-present Facebook. All Rights Reserved.

import React from 'react';
import Heading from './Heading';
import Button from './Button';
import CheckboxWithLabel from './CheckboxWithLabel';

export default class Article extends React.Component {

  render() {
    return (
      <article>
        <Heading title="title"/>
        <span>{this.props.children}</span>
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
        <Button label="not" />
      </article>
    );
  }
}
// component_40
