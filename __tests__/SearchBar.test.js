import React from 'react';
import {TextInput} from 'react-native';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from '../src/components/SearchBar';

configure({adapter: new Adapter()});
describe('<SearchBar /> component', () => {
  let wrapper;
  beforeEach(() => {
    const term = '';
    const onTermChange = jest.fn();
    const onTermSubmit = jest.fn();
    wrapper = shallow(
      <SearchBar
        term={term}
        onTermChange={onTermChange}
        onTermSubmit={onTermSubmit}
      />,
    );
  });

  it('should be exist', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should renders <SearchBar /> correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
