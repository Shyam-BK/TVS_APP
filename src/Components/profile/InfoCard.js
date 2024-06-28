import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";

const InfoCard = ({ navigation }) => {
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [username, setUsername] = useState("Shyam123");
  const [email, setEmail] = useState("Shyam123@gmail.com");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleUsernamePress = () => {
    setIsEditingUsername(true);
  };

  const handleEmailPress = () => {
    setIsEditingEmail(true);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(text));
  };

  const handleEmailBlur = () => {
    // Check email validity
    if (isEmailValid) {
      setIsEditingEmail(false);
      Alert.alert("Success", "Email updated successfully!");
    } else {
      Alert.alert("Error", "Please enter a valid email address.");
    }
  };

  const handleUsernameBlur = () => {
    setIsEditingUsername(false);
    Alert.alert("Success", "Username updated successfully!");
  };

  return (
    <View style={{ flex: 1, marginTop: 10 }}>
      <Text style={styles.sectionTitle}>Account</Text>
      <Text style={styles.label}>Phone Number</Text>
      <Text style={styles.text}>+91 9934567800</Text>

      <Text style={styles.label}>Username</Text>
      {isEditingUsername ? (
        <TextInput
          style={styles.textInput}
          value={username}
          onChangeText={setUsername}
          onBlur={handleUsernameBlur}
        />
      ) : (
        <TouchableOpacity onPress={handleUsernamePress}>
          <Text style={styles.text}>{username}</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.label}>Email ID</Text>
      {isEditingEmail ? (
        <TextInput
          style={[styles.textInput, !isEmailValid && styles.invalidInput]}
          value={email}
          onChangeText={handleEmailChange}
          onBlur={handleEmailBlur}
          keyboardType="email-address"
        />
      ) : (
        <TouchableOpacity onPress={handleEmailPress}>
          <Text style={styles.text}>{email}</Text>
        </TouchableOpacity>
      )}

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
  textInput: {
    fontSize: 14,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 2,
  },
  invalidInput: {
    borderColor: "red",
  },
  logoutText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#00AEB9",
    marginTop: 40,
  },
});

export default InfoCard;
