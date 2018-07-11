import React from 'react';
// import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('App renders without crashing', () => {
  expect(app.exists()).toEqual(true);
});

it('should contain a Switch component', () => {
  expect(app.find('Switch').exists()).toBe(true);
});
