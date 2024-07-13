import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const InfoCard = ({ navigation }) => {
  const serviceProviding = "Electrician"; // Example service providing data

  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <Text style={styles.sectionTitle}>Account</Text>
      <Text style={styles.label}>Phone Number</Text>
      <Text style={styles.text}>+91 9934567800</Text>

      <Text style={styles.label}>Username</Text>
      <Text style={styles.text}>Shyam123</Text>

      <Text style={styles.label}>Service Providing</Text>
      <Text style={styles.text}>{serviceProviding}</Text>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "800",
          color: "#00AEB9",
          marginTop: 18,
        }}
      >
        Settings
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
        <Text style={{ fontSize: 14, fontWeight: "bold", marginTop: 10 }}>
          Notifications
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 16,
          fontWeight: "800",
          color: "#00AEB9",
          marginTop: 18,
        }}
      >
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

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "800",
            color: "#00AEB9",
            marginTop: 40,
          }}
        >
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
