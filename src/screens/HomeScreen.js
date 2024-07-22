import React, { useState, useEffect } from "react";
import { View, Text, StatusBar } from "react-native";
import * as Location from "expo-location";
import * as TaskManager from "expo-task-manager";
import HomeHeader from "../Components/home/HomeHeader";
import MapArea from "../Components/home/MapArea";
import LocationCard from "../Components/home/LocationCard";
import axiosInstance from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LOCATION_TASK_NAME = 'background-location-task';
const UPDATE_INTERVAL = 1000 * 60 * 1 ; // 5 minutes in milliseconds

TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
  if (error) {
    console.error('Background location task error:', error);
    return;
  }
  if (data) {
    const { locations } = data;
    const location = locations[0];
    const { latitude, longitude } = location.coords;
    console.log('Background location:', latitude, longitude);

    // Send location to the backend
    const token = await AsyncStorage.getItem('userToken');
    try {
      const response = await axiosInstance.post(
        'update_latlong/',
        {
          latitude: latitude,
          longitude: longitude,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`, // Ensure the token is correct
          },
        }
      );
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  }
});

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const startLocationUpdates = async () => {
      // Request foreground location permissions
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      // Request background location permissions
      const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
      if (backgroundStatus !== 'granted') {
        setErrorMsg('Permission to access background location was denied');
        return;
      }

      // Start foreground location updates
      const foregroundLocation = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: UPDATE_INTERVAL,
          distanceInterval: 0,
        },
        (location) => {
          setLocation(location);
          const { latitude, longitude } = location.coords;
          // console.log('Foreground location:', latitude, longitude);

          // Send location to the backend
          const updateLocation = async () => {
            const token = await AsyncStorage.getItem('userToken');
            try {
              const response = await axiosInstance.post(
                'update_latlong/',
                {
                  latitude: latitude,
                  longitude: longitude,
                },
                {
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Token ${token}`, // Ensure the token is correct
                  },
                }
              );
              console.log('Success:', response.data);
            } catch (error) {
              console.error('Error:', error.response ? error.response.data : error.message);
            }
          };

          updateLocation();
        }
      );

      // Start background location updates
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.High,
        timeInterval: UPDATE_INTERVAL,
        distanceInterval: 0,
        foregroundService: {
          notificationTitle: 'Using your location',
          notificationBody: 'To turn off, go to your app settings and disable location.',
        },
      });
    };

    startLocationUpdates();

    return () => {
      Location.stopLocationUpdatesAsync(LOCATION_TASK_NAME);
    };
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
