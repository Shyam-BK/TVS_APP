import { View, Text, Switch,  } from "react-native";
import React, { useState } from "react";

const NotificationContent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleNotification = () => setIsEnabled((previousState) => !previousState);
  const [isVibrate, setIsVibrate] = useState(false);
  const toggleVibrate = () => setIsVibrate((previousState) => !previousState);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 20,
          marginHorizontal: 20
        }}
      >
        <View style={{ flexDirection: "column", top: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", }}>Enable Notifications</Text>
        <Text style={{ fontSize: 12, fontWeight: "semi-bold", color: "gray"}}>Get alerts when notification comes in</Text>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#4bb8f5" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNotification}
          value={isEnabled}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginVertical: 10,
          marginHorizontal: 20
        }}
      >
        <View style={{ flexDirection: "column", top: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", }}>Vibrate</Text>
        <Text style={{ fontSize: 12, fontWeight: "semi-bold", color: "gray"}}>Vibrates when notification comes in</Text>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isVibrate ? "#4bb8f5" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleVibrate}
          value={isVibrate}
        />
      </View>
    </View>
  );
};

export default NotificationContent;
