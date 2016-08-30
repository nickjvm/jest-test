// Copyright 2004-present Facebook. All Rights Reserved.

/* eslint-disable no-unused-vars */

import React from 'react';
//import ReactDOM from 'react-dom';
// import TestUtils from 'react-addons-test-utils';
import {shallow} from 'enzyme';
import CheckboxWithLabel from './CheckboxWithLabel';
import Article from './Article';

describe('CheckboxWithLabel', () => {

  it('Renders a thing', () => {
    // Render a checkbox with label in the document
    const article = shallow(<Article>hello</Article>);

    expect(article.find('CheckboxWithLabel').prop('labelOn')).toEqual('On');
    expect(article.find('CheckboxWithLabel').prop('labelOff')).toEqual('Off');
    const children = article.find('span');

    expect(children.text()).toEqual('hello');

    const button = article.find('Button');

    expect(button.prop('label')).toEqual('not');

    button.simulate('click');


    const heading = article.find('Header');

    expect(heading.prop('title')).toEqual('title');
  });

  it('Does checkboxy things', () => {
    const props = {
      labelOn: 'a',
      labelOff: 'b',
    };

    const props2 = {
      ...props,
      labelOn: 'On',
      labelOff: 'Off',
    };
    
    const checkbox = shallow(<CheckboxWithLabel {...props2} />);
    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');

  });
  it('Renders a thing', () => {
    // Render a checkbox with label in the document
    const article = shallow(<Article>hello</Article>);

    expect(article.find('CheckboxWithLabel').prop('labelOn')).toEqual('On');
    expect(article.find('CheckboxWithLabel').prop('labelOff')).toEqual('Off');
    const children = article.find('span');

    expect(children.text()).toEqual('hello');

    const button = article.find('Button');

    expect(button.prop('label')).toEqual('not');

    button.simulate('click');


    const heading = article.find('Header');

    expect(heading.prop('title')).toEqual('title');
  });

  it('Does checkboxy things', () => {

    const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off"/>);

    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');

  });
  it('Renders a thing', () => {
    // Render a checkbox with label in the document
    const article = shallow(<Article>hello</Article>);

    expect(article.find('CheckboxWithLabel').prop('labelOn')).toEqual('On');
    expect(article.find('CheckboxWithLabel').prop('labelOff')).toEqual('Off');
    const children = article.find('span');

    expect(children.text()).toEqual('hello');

    const button = article.find('Button');

    expect(button.prop('label')).toEqual('not');

    button.simulate('click');


    const heading = article.find('Header');

    expect(heading.prop('title')).toEqual('title');
  });

  it('Does checkboxy things', () => {

    const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off"/>);

    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');

  });
  it('Renders a thing', () => {
    // Render a checkbox with label in the document
    const article = shallow(<Article>hello</Article>);

    expect(article.find('CheckboxWithLabel').prop('labelOn')).toEqual('On');
    expect(article.find('CheckboxWithLabel').prop('labelOff')).toEqual('Off');
    const children = article.find('span');

    expect(children.text()).toEqual('hello');

    const button = article.find('Button');

    expect(button.prop('label')).toEqual('not');

    button.simulate('click');


    const heading = article.find('Header');

    expect(heading.prop('title')).toEqual('title');
  });

  it('Does checkboxy things', () => {

    const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off"/>);

    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');

  });
  it('Renders a thing', () => {
    // Render a checkbox with label in the document
    const article = shallow(<Article>hello</Article>);

    expect(article.find('CheckboxWithLabel').prop('labelOn')).toEqual('On');
    expect(article.find('CheckboxWithLabel').prop('labelOff')).toEqual('Off');
    const children = article.find('span');

    expect(children.text()).toEqual('hello');

    const button = article.find('Button');

    expect(button.prop('label')).toEqual('not');

    button.simulate('click');


    const heading = article.find('Header');

    expect(heading.prop('title')).toEqual('title');
  });

  it('Does checkboxy things', () => {

    const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off"/>);

    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');

  });
  it('Renders a thing', () => {
    // Render a checkbox with label in the document
    const article = shallow(<Article>hello</Article>);

    expect(article.find('CheckboxWithLabel').prop('labelOn')).toEqual('On');
    expect(article.find('CheckboxWithLabel').prop('labelOff')).toEqual('Off');
    const children = article.find('span');

    expect(children.text()).toEqual('hello');

    const button = article.find('Button');

    expect(button.prop('label')).toEqual('not');

    button.simulate('click');


    const heading = article.find('Header');

    expect(heading.prop('title')).toEqual('title');
  });

  it('Does checkboxy things', () => {

    const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off"/>);

    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');

  });
  it('Renders a thing', () => {
    // Render a checkbox with label in the document
    const article = shallow(<Article>hello</Article>);

    expect(article.find('CheckboxWithLabel').prop('labelOn')).toEqual('On');
    expect(article.find('CheckboxWithLabel').prop('labelOff')).toEqual('Off');
    const children = article.find('span');

    expect(children.text()).toEqual('hello');

    const button = article.find('Button');

    expect(button.prop('label')).toEqual('not');

    button.simulate('click');


    const heading = article.find('Header');

    expect(heading.prop('title')).toEqual('title');
  });

  it('Does checkboxy things', () => {

    const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off"/>);

    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');

  });
  it('Renders a thing', () => {
    // Render a checkbox with label in the document
    const article = shallow(<Article>hello</Article>);

    expect(article.find('CheckboxWithLabel').prop('labelOn')).toEqual('On');
    expect(article.find('CheckboxWithLabel').prop('labelOff')).toEqual('Off');
    const children = article.find('span');

    expect(children.text()).toEqual('hello');

    const button = article.find('Button');

    expect(button.prop('label')).toEqual('not');

    button.simulate('click');


    const heading = article.find('Header');

    expect(heading.prop('title')).toEqual('title');
  });

  it('Does checkboxy things', () => {

    const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off"/>);

    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');

  });
  it('Renders a thing', () => {
    // Render a checkbox with label in the document
    const article = shallow(<Article>hello</Article>);

    expect(article.find('CheckboxWithLabel').prop('labelOn')).toEqual('On');
    expect(article.find('CheckboxWithLabel').prop('labelOff')).toEqual('Off');
    const children = article.find('span');

    expect(children.text()).toEqual('hello');

    const button = article.find('Button');

    expect(button.prop('label')).toEqual('not');

    button.simulate('click');


    const heading = article.find('Header');

    expect(heading.prop('title')).toEqual('title');
  });

  it('Does checkboxy things', () => {

    const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off"/>);

    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');

  });
  it('Renders a thing', () => {
    // Render a checkbox with label in the document
    const article = shallow(<Article>hello</Article>);

    expect(article.find('CheckboxWithLabel').prop('labelOn')).toEqual('On');
    expect(article.find('CheckboxWithLabel').prop('labelOff')).toEqual('Off');
    const children = article.find('span');

    expect(children.text()).toEqual('hello');

    const button = article.find('Button');

    expect(button.prop('label')).toEqual('not');

    button.simulate('click');


    const heading = article.find('Header');

    expect(heading.prop('title')).toEqual('title');
  });

  it('Does checkboxy things', () => {

    const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off"/>);

    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');

  });
  it('Renders a thing', () => {
    // Render a checkbox with label in the document
    const article = shallow(<Article>hello</Article>);

    expect(article.find('CheckboxWithLabel').prop('labelOn')).toEqual('On');
    expect(article.find('CheckboxWithLabel').prop('labelOff')).toEqual('Off');
    const children = article.find('span');

    expect(children.text()).toEqual('hello');

    const button = article.find('Button');

    expect(button.prop('label')).toEqual('not');

    button.simulate('click');


    const heading = article.find('Header');

    expect(heading.prop('title')).toEqual('title');
  });

  it('Does checkboxy things', () => {

    const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off"/>);

    expect(checkbox.text()).toEqual('Off');
    checkbox.find('input').simulate('change');
    expect(checkbox.text()).toEqual('On');

  });
});
