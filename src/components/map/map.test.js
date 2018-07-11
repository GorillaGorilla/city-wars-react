import React from 'react';
import { shallow } from 'enzyme';
import Map from './Map';

const map = shallow(<Map />);

describe('Map', () => {
  it('should render', () => {
    expect(map.exists()).toBe(true);
  });
});
