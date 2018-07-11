import React from 'react';
import { shallow } from 'enzyme';
import Area from './Area';

describe('Area', () => {
  const label = 'test';
  const area = shallow(<Area label={label} />);

  it('should render without crashing', () => {
    expect(area.exists()).toBe(true);
  });

  it('should contain an element with class name equal to label prop', () => {
    expect(area.find(`.${label}`).exists()).toBe(true);
  });
});
