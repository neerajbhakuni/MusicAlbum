import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import TrackPlayer, {
  TrackPlayerEvents,
  STATE_PLAYING,
} from 'react-native-track-player';
import {
  useTrackPlayerProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player/lib/hooks';

import AlbumArt from '../components/AlbumArt';
import SeekBar from '../components/SeekBar';
import TrackControl from '../components/TrackControl';

//function to initialize the Track Player
const trackPlayerInit = async ({album}) => {
  await TrackPlayer.setupPlayer();
  TrackPlayer.updateOptions({
    stopWithApp: true,
    capabilities: [
      TrackPlayer.CAPABILITY_PLAY,
      TrackPlayer.CAPABILITY_PAUSE,
      TrackPlayer.CAPABILITY_JUMP_FORWARD,
      TrackPlayer.CAPABILITY_JUMP_BACKWARD,
    ],
  });
  await TrackPlayer.add({
    id: album.trackId,
    url: album.previewUrl,
    type: album.primaryGenreName,
    title: album.trackName,
    album: album.collectionName,
    artist: album.artistName,
    artwork: album.artworkUrl100,
  });
  return true;
};

const MusicPlayer = ({
  route: {
    params: {album},
  },
}) => {
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const {position, duration} = useTrackPlayerProgress(250);

  useEffect(() => {
    const startPlayer = async () => {
      let isInit = await trackPlayerInit({album});
      setIsTrackPlayerInit(isInit);
    };
    startPlayer();
  }, [album]);

  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
  }, [isSeeking, position, duration]);

  useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], (event) => {
    if (event.state === STATE_PLAYING) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  });

  const onSlidingStart = () => {
    if (!isPlaying) {
      TrackPlayer.play();
    }
    setIsSeeking(true);
  };
  const onSeekComplete = async (value) => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };

  const onPressPlay = () => {
    if (!isPlaying) {
      TrackPlayer.play();
    } else {
      TrackPlayer.pause();
    }
  };

  const onBack = async () => {
    if (!isPlaying) {
      TrackPlayer.play();
    }
    await TrackPlayer.seekTo(position - 10);
  };
  const onForward = async () => {
    if (!isPlaying) {
      TrackPlayer.play();
    }
    await TrackPlayer.seekTo(position + 10);
  };

  return (
    <View style={styles.container}>
      <AlbumArt
        uri={album.artworkUrl100}
        trackName={album.trackName}
        collection={album.collectionName}
      />
      <SeekBar
        currentPosition={position}
        sliderValue={sliderValue}
        trackLength={duration}
        onSlidingStart={onSlidingStart}
        onSeekComplete={onSeekComplete}
      />
      <TrackControl
        paused={!isPlaying}
        onPressPlay={onPressPlay}
        onBack={onBack}
        onForward={onForward}
        forwardDisabled={false}
        disabled={!isTrackPlayerInit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf3f6',
    marginHorizontal: 16,
  },
});

export default MusicPlayer;
