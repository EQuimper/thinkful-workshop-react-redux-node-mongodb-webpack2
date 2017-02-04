import React from 'react';
import { shallow } from 'enzyme';
import App from '../../layout/App';

describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('should be mount', () => {
    expect(wrapper.length).toBe(1);
  });
  it('should have 1 div', () => {
    expect(wrapper.find('div').length).toBe(1);
  });
  it('should have initial state loading false', () => {
    expect(wrapper.state('loading')).toBe(false);
  });
  it('should have initial state dots empty', () => {
    expect(wrapper.state('dots')).toEqual([]);
  });
  it('should have initial state message null', () => {
    expect(wrapper.state('message')).toBeNull();
  });
  it('should have props name to equal Thinkful', () => {
    expect(wrapper.instance().props).toEqual({ name: 'Thinkful' });
  });
});
