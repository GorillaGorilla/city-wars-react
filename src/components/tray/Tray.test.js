import React from 'react';
import { shallow } from 'enzyme';
import Tray from './Tray';

describe('Tray', () => {
  const area = shallow(<Tray />);

  it('should render without crashing', () => {
    expect(area.exists()).toBe(true);
  });

  // it('should contain an element with class name equal to label prop', () => {
  //   expect(area.find(`.${label}`).exists()).toBe(true);
  // });
});
