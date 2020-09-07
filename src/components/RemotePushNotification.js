import {useEffect} from 'react';
import {Alert, Linking, Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import {config} from '../network/config';

const RemotePushNotification = () => {
  useEffect(() => {
    PushNotification.popInitialNotification((notification) => {
      if (notification) {
        const data =
          Platform.OS === 'ios'
            ? JSON.parse(notification._data.data)
            : JSON.parse(notification.data);
        displayMesssage({...data});
      }
    });

    PushNotification.configure({
      onRegister: function (token) {},
      onRegistrationError: function () {
        Alert.alert(
          'Allow Music Album App to access',
          'Open the Settings -> Go to  MusicAlbum -> Allow Notifications',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'Allow Notifications',
              onPress: () => {
                Linking.openSettings(
                  'app-settings://notification/MusicAlbum/Notifications',
                );
              },
            },
          ],
          {cancelable: false},
        );
      },

      onNotification: function (notification) {
        if (notification) {
          const data =
            notification.foreground === true
              ? JSON.parse(notification.data.data)
              : notification.data;
          displayMesssage({...data});
        }

        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      //FIXME: Android only: GCM or FCM Sender ID
      senderID: config.FCMSenderId,

      permissions: {
        alert: true,
        badge: false,
        sound: true,
      },

      popInitialNotification: Platform.OS === 'ios' ? true : false,
      requestPermissions: true,
    });
  }, []);

  const displayMesssage = ({title, message}) => {
    Alert.alert(
      `${title}`,
      `${message}`,
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  return null;
};

export default RemotePushNotification;
