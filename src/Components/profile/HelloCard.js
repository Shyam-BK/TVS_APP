import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import InfoCard from "./InfoCard";

const HelloCard = ({ location, navigation }) => {
  return (
    <View style={{ flex: 4, paddingHorizontal: 18, marginTop: 60 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>Hello Client !</Text>
      {location ? (
        <View style={{ flexDirection: "row", marginTop: 10, gap: 10 }}>
          <Text style={{ fontSize: 16 }}>Active</Text>
          <FontAwesome
            name="circle"
            size={10}
            color="green"
            style={{ top: 7 }}
          />
        </View>
      ) : (
        <View style={{ flexDirection: "row", marginTop: 10, gap: 10 }}>
          <Text style={{ fontSize: 16 }}>Inactive</Text>
          <FontAwesome name="circle" size={10} color="red" style={{ top: 7 }} />
        </View>
      )}
      <InfoCard navigation={navigation}/>
    </View>
  );
};

export default HelloCard;
