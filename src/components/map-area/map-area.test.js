import React from 'react';
import { shallow } from 'enzyme';
import MapArea from './MapArea';

const map = shallow(<MapArea />);

describe('Map', () => {
  it('should render', () => {
    expect(map.exists()).toBe(true);
  });
});
