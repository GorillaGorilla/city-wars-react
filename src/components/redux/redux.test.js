import React from 'react';
import { shallow } from 'enzyme';
import Redux from './Redux';

const redux = shallow(<Redux />);

describe('Redux', () => {
  it('should contain the app component', () => {
    expect(redux.find('App')).toHaveLength(1);
  });
});
