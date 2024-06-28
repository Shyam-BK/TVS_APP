import { View, Text } from 'react-native'
import React from 'react'
import NotificationHeader from '../Components/notifications/NotificationHeader'
import NotificationContent from '../Components/notifications/NotificationContent';

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <NotificationHeader navigation={navigation} />
      <NotificationContent />
    </View>
  );
};

export default NotificationScreen;