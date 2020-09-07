import React from 'react';
import {TouchableOpacity} from 'react-native';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GridItem from '../src/components/GridItem';

configure({adapter: new Adapter()});
describe('<GridItem /> Component', () => {
  let wrapper;
  let album;
  let onPressAlbum;
  beforeEach(() => {
    album = {
      artworkUrl100:
        'https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/be/38/d0/be38d058-31ed-c0ea-91e6-12052865fd20/source/100x100bb.jpg',
      trackName: 'Upside Down',
    };
    onPressAlbum = jest.fn();
    wrapper = shallow(<GridItem album={album} onPressAlbum={onPressAlbum} />);
  });

  it('should be exist', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should display correct the Artwork Image Icon', () => {
    const props = wrapper.props();
    expect(props.children.props.children[0].props.source.uri).toEqual(
      album.artworkUrl100,
    );
  });

  it('should display correct the Track Name', () => {
    const props = wrapper.props();
    expect(props.children.props.children[1].props.children).toEqual(
      album.trackName,
    );
  });

  it('should call onPress', () => {
    const onPressEvent = jest.fn();
    onPressEvent.mockReturnValue(album);
    const wrapper = shallow(<GridItem album={album} onPressAlbum={onPressEvent} />);
    wrapper.find(TouchableOpacity).first().props().onPress();
    expect(onPressEvent.mock.calls.length).toBe(1);    
  });
});
