import React, { useState, useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import * as Location from "expo-location";
import HomeHeader from "../Components/home/HomeHeader";
import MapArea from "../Components/home/MapArea";
import LocationCard from "../Components/home/LocationCard";
import axiosInstance from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const UPDATE_INTERVAL = 1000 * 60 * 1;

  useEffect(() => {
    const updateLocation = async () => {
      // Request permissions to access location
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      // Get the current location
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      const { latitude, longitude } = location.coords;
      console.log("Current location:", latitude, longitude);

      // Send location to the backend
      const token = await AsyncStorage.getItem("userToken");
      console.log("Token:", token);
      try {
        const response = await axiosInstance.post(
          `update_latlong/`,
          {
            latitude: latitude,
            longitude: longitude,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`, // Ensure the token is correct
            },
          }
        );
        console.log("Success:", response.data);
      } catch (error) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      }
    };

    // Initial location update
    updateLocation();

    // Set up interval to update location every 5 minutes
    const interval = setInterval(updateLocation, UPDATE_INTERVAL);

    // Clear interval on component unmount
    return () => clearInterval(interval);
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