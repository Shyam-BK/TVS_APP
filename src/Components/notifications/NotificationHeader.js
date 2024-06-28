import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons"; 

const NotificationHeader = ({ navigation }) => {
  return (
    <View style={{ height: 50, backgroundColor: "#8DDBE0", alignItems: "center",  flexDirection: "row", paddingHorizontal: 10, }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: "absolute", left: 10 }}>
        <Ionicons name="arrow-back" size={30} />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: "bold" ,left: 40}}>
        Notifications
      </Text>
    </View>
  );
};

export default NotificationHeader;
