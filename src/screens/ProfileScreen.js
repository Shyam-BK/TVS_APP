import { View,  } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import ProfileHeader from "../Components/profile/ProfileHeader";
import HelloCard from "../Components/profile/HelloCard";

const ProfileScreen = ({}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const { location } = route.params;

  return (
    <View style={{ flex: 1 }}>
      
      <ProfileHeader navigation={navigation} />
      <HelloCard  location={location} navigation={navigation} />
    </View>
  );
};

export default ProfileScreen;
