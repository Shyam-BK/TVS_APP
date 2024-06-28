import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const ProfileHeader = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flexDirection: "row", backgroundColor: "#8DDBE0", flex: 0.8 }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={{top: 10,left: 15}}>
          <Ionicons name="arrow-back" size={30} />
        </TouchableOpacity>
        <Text style={{ left: 28, top: 10, fontSize: 20, fontWeight: "bold" }}>
          Profile
        </Text>
      </View>
      <View>
        <Image
          source={require("../../../assets/profilepic.png")}
          style={{
            width: 120,
            height: 120,
            alignSelf: "center",
            borderRadius: 75,
            position: "absolute",
            bottom: -60,
          }}
        />
      </View>
    </View>
  );
};

export default ProfileHeader;
