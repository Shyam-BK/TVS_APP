import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons';

const HomeHeader = ({ navigation , location}) => {
  return (
    <View
      style={styles.conatiner}
    >
      <Text style={styles.name}>
        Welcome Client!!
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Profile", { location })}>
        <MaterialIcons name="account-circle" size={40} color={"black"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 0.5,
    height: 60,
    backgroundColor: "#8DDBE0",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 20, 
    fontWeight: "900",
  },
});

export default HomeHeader;
