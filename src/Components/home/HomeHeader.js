import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import axios from "axios";import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../../services/api";

const HomeHeader = ({ navigation , location, }) => {
   const [userData, setUserData] = useState('');


const getUserData = async () => {
  try {
    const token = await AsyncStorage.getItem("userToken");
    console.log("HH Token:", token);
    if (!token) {
      throw new Error("Token not found");
    }
    const response = await axiosInstance.get(`get_user_data/`, {
      headers: {
        Authorization: `Token ${token}`
      }
    });
    setUserData(response.data);
    console.log("HH User Data:", response.data);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};


  useEffect(() => {
    getUserData();
  },[]);
  
  


  return (
    <View
      style={styles.conatiner}
    >
      <Text style={styles.name}>
        Welcome {userData? userData.firstName +" "+ userData.lastName:"Guest"} !!
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Profile", { location })}>
        <MaterialIcons name="account-circle" size={42} color={"black"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 0.2,
    height: 60,
    backgroundColor: "#8DDBE0",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 24, 
    fontWeight: "900",
  },
});

export default HomeHeader;
