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
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {},

      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
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

      // (required) Called when a remote or local notification is opened or received
      onNotification: function (notification) {
        // process the notification here
        if (notification) {
          const data =
            notification.foreground === true
              ? JSON.parse(notification.data.data)
              : notification.data;
          displayMesssage({...data});
        }

        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      // Android only: GCM or FCM Sender ID
      senderID: config.FCMSenderId,

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: false,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: Platform.OS === 'ios' ? true : false,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
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
