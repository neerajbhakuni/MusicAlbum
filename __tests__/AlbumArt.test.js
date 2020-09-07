import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AlbumArt from '../src/components/AlbumArt';

configure({adapter: new Adapter()});
describe('<AlbumArt />', () => {
  let wrapper;
  beforeEach(() => {
    const album = {
      uri:
        'https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/be/38/d0/be38d058-31ed-c0ea-91e6-12052865fd20/source/100x100bb.jpg',
      trackName: 'Upside Down',
      collection:
        'Jack Johnson and Friends: Sing-A-Longs and Lullabies for the Film Curious George',
    };
    wrapper = shallow(
      <AlbumArt
        uri={album.uri}
        trackName={album.trackName}
        collection={album.collection}
      />,
    );
  });

  it('should renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
