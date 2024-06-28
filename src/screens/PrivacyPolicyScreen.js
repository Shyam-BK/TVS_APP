import { View, Text, ScrollView } from "react-native";
import React from "react";
import PrivacyHeader from "../Components/privacypolicy/PrivacyHeader";
import Policy from "../Components/privacypolicy/Policy";

const PrivacyPolicyScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <PrivacyHeader navigation={navigation} />
      <ScrollView style={{ flex: 1.2 }}>
        <Policy />
      </ScrollView>
    </View>
  );
};

export default PrivacyPolicyScreen;
