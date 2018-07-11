import React from 'react';
import { shallow } from 'enzyme';
import Bar from './Bar';

describe('Bar', () => {
  const area = shallow(<Bar />);

  it('should render without crashing', () => {
    expect(area.exists()).toBe(true);
  });

  // it('should contain an element with class name equal to label prop', () => {
  //   expect(area.find(`.${label}`).exists()).toBe(true);
  // });
});
