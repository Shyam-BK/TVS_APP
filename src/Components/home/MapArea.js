import React, { useRef } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import * as Location from "expo-location";

const MapArea = ({ location, setLocation, errorMsg, setErrorMsg, authToken }) => {
  const mapRef = useRef(null); // Reference to the MapView

  const handleLocationPress = async () => {
    try {
      let newLocation = await Location.getCurrentPositionAsync({});
      setLocation(newLocation);
      setErrorMsg(null); // Reset error message if location fetch is successful

      // Animate to the new region
      mapRef.current.animateToRegion(
        {
          latitude: newLocation.coords.latitude,
          longitude: newLocation.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        1000
      ); // Duration of the animation in milliseconds

    } catch (error) {
      setErrorMsg(`Failed to fetch location: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      {errorMsg ? (
        <Text style={{ textAlign: "center", color: "red", marginTop: 10 }}>
          {errorMsg}
        </Text>
      ) : null}
      {location ? (
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="You are here"
          />
        </MapView>
      ) : (
        <Text style={{ alignSelf: "center", marginTop: 20 }}>
          Turn On Your Location...
        </Text>
      )}
      <TouchableOpacity style={styles.locator} onPress={handleLocationPress}>
        <FontAwesome6 name="location-crosshairs" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 5,
  },
  map: {
    flex: 1,
  },
  locator: {
    position: "absolute",
    bottom: 70,
    right: 20,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
    elevation: 5,
  },
});

export default MapArea;
