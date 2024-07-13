import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import axios from "axios";

const SignUpScreen = ({ navigation }) => {
  const width = Dimensions.get("screen").width;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceProviding, setServiceProviding] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "white" }}
    >
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../assets/signup.jpg")}
          style={{ width: width, height: 200, marginTop: "10%" }}
        />
        <Text
          style={{
            fontSize: 30,
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          Create Your Account
        </Text>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.formContainer}>
            <View style={styles.row}>
              <TextInput
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
                style={{
                  width: "48%",
                  height: 40,
                  marginVertical: 10,
                  borderColor: "#007BFF",
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingLeft: 10,
                }}
              />
              <TextInput
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}
                style={{
                  width: "48%",
                  height: 40,
                  marginVertical: 10,
                  borderColor: "#007BFF",
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingLeft: 10,
                }}
              />
            </View>
            <TextInput
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              style={styles.input}
              keyboardType="numeric"
              maxLength={10}
            />
            <TextInput
              placeholder="Service Providing"
              value={serviceProviding}
              onChangeText={setServiceProviding}
              style={styles.input}
            />
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={setUsername}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              secureTextEntry
            />
            <TextInput
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={styles.input}
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.signUp}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 18 }}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.lineview}>
            <View style={styles.line}></View>
            <Text style={{ marginHorizontal: 10 }}>or</Text>
            <View style={styles.line}></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 10,
              bottom: 10,
            }}
          >
            <Text style={{ textAlign: "center", color: "black", fontSize: 16 }}>
              Already have an account?
            </Text>
            <Text> </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  textAlign: "center",
                  color: "#007BFF",
                  fontSize: 16,
                  fontWeight: "bold",
                  textDecorationLine: "underline",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 20, // Adjusted padding to accommodate space for the keyboard
  },
  row: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
  input: {
    width: "80%", // Adjusted width to fit within the form
    height: 40,
    marginVertical: 10,
    borderColor: "#007BFF",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  signUp: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    width: "80%",
    marginTop: 10,
  },
  lineview: {
    flexDirection: "row",
    justifyContent: "center",
    bottom: 10,
  },
  line: {
    backgroundColor: "black",
    height: 2,
    width: 130,
    marginVertical: 10,
  },
});

export default SignUpScreen;
