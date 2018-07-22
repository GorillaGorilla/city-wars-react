import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';

describe('Layout', () => {
  const layout = shallow(<Layout />);

  it('should render without crashing', () => {
    expect(layout.exists()).toBe(true);
  });

  it('should match snapshot', () => {
    expect(layout).toMatchSnapshot();
  });

  it('should contain 4 areas', () => {
    expect(layout.children().length).toEqual(3);
  });

  // it('should contain a map area component', () => {
  //   expect(layout.find('Connect(MapContainer)').exists()).toBe(true);
  // });
});

