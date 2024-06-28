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
} from "react-native";

const SignUpScreen = ({ navigation }) => {
  const width = Dimensions.get("screen").width;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [serviceProviding, setServiceProviding] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    // Here you would send the data to your backend for account creation
    console.log({
      firstName,
      lastName,
      phoneNumber,
      serviceProviding,
      username,
      password,
    });
    navigation.navigate("Home");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "white" }}
    >
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Image
        source={require("../../assets/signup.jpg")}
        style={{ width: width, height: 180, marginTop: "10%" }}
      />
      <Text style={{ fontSize: 30, fontWeight: "900", textAlign: "center" }}>
        Create Your Account
      </Text>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.input}
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
      <TouchableOpacity style={styles.signup} onPress={handleSignUp}>
        <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <View style={styles.lineview}>
        <View style={styles.line}></View>
        <Text style={{ marginHorizontal: 10 }}>or </Text>
        <View style={styles.line}></View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", gap: 5,  }}>
        <Text style={{ textAlign: "center", color: "black", fontSize: 16 }}>
          Already have an account?
        </Text>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate("Login")}
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
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    alignSelf: "center",
    height: 40,
    margin: 12,
    borderColor: "#007BFF", // Blue border color
    borderWidth: 1, // Border width
    borderRadius: 5,
    paddingLeft: 10,
  },
  signup: {
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  lineview: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    alignSelf: "center",
    marginVertical: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
  },
});

export default SignUpScreen;
