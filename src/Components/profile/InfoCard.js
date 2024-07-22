import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from "react-redux";
import { setToken } from "../../../redux/reducers/loginReducer";
import axios from "axios";
import axiosInstance from "../../services/api";

const InfoCard = ({ navigation }) => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState('');
  
  const getUserData = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      const response = await axiosInstance.get(`get_user_data/`, {
      headers: {
        Authorization: `Token ${token}`
      }
    });
    setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  
  
    useEffect(() => {
      getUserData();
    },[]);
  const handleLogout = async () => {
    
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            try {
              // Clear user token or any other logout logic here
              await AsyncStorage.removeItem('userToken');
              await AsyncStorage.removeItem('userData');
              // Reset the navigation stack to only show Login screen
              dispatch(setToken(""));
              
            } catch (e) {
              console.error(e);
            }
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <Text style={styles.sectionTitle}>Account</Text>
      <Text style={styles.label}>Phone Number</Text>
      <Text style={styles.text}>+91 {userData.phoneNumber}</Text>

      <Text style={styles.label}>Username</Text>
      <Text style={styles.text}>{userData.username}</Text>

      <Text style={styles.label}>Service Providing</Text>
      <Text style={styles.text}>{userData.serviceProviding}</Text>

      <Text style={{ fontSize: 16, fontWeight: "800", color: "#00AEB9", marginTop: 18 }}>
        Settings
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 10 }}>
          Notifications
        </Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 16, fontWeight: "800", color: "#00AEB9", marginTop: 18 }}>
        Help
      </Text>
      <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 10 }}>
        Ask a Question
      </Text>
      <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 10 }}>
        FAQ
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("PrivacyPolicy")}>
        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 10 }}>
          Privacy Policy
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogout}>
        <Text style={{ fontSize: 20, fontWeight: "800", color: "#00AEB9", marginTop: 40 }}>
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#00AEB9",
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 14,
  },
});

export default InfoCard;
