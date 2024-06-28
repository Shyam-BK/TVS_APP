import React, { useState, useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import * as Location from "expo-location";
import HomeHeader from "../Components/home/HomeHeader";
import MapArea from "../Components/home/MapArea";
import LocationCard from "../Components/home/LocationCard";

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (error) {
        setErrorMsg(`Failed to fetch location: ${error.message}`);
      }
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent={false} />
      <HomeHeader navigation={navigation} location={location} />
      <MapArea
        location={location}
        setLocation={setLocation}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      />
      <LocationCard location={location} />
    </View>
  );
};

export default HomeScreen;
