import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import InfoCard from "./InfoCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import axiosInstance from "../../services/api";

const HelloCard = ({navigation,location }) => {

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

  return (
    <View style={{ flex: 4, paddingHorizontal: 18, marginTop: 60 }}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Hello {userData? userData.firstName +" "+ userData.lastName:"Guest"} !
      </Text>
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
      <InfoCard navigation={navigation}   />
    </View>
  );
};

export default HelloCard;
