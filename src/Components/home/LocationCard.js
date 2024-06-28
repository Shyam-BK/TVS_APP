import { View, Text, Dimensions } from "react-native";
import React from "react";

const LocationCard = ({ location }) => {
  return (
    <View style={{ flex: 1.5 }}>
      <View style={{ flex: 0.5, alignItems: "center" }}>
        {location ? (
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
            Your Location is being shared!
          </Text>
        ) : (
          <Text style={{ fontWeight: "bold", fontSize: 17 }}>
             Location access denied!
          </Text>
        )}
        <View
          style={{
            backgroundColor: "#8DDBE0",
            width: Dimensions.get("screen").width - 80,
            top: 8,
            padding: 5
          }}
        >
          {location ? (
            <Text style={{ alignSelf: "center" }}>
              Latitude: {location.coords.latitude}, Longitude:{" "}
              {location.coords.longitude}
            </Text>
          ) : (
            <Text style={{ alignSelf: "center" }}>Location not available</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default LocationCard;
