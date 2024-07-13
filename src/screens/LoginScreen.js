import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const width = Dimensions.get("screen").width;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -500}
    >
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Image
          source={require("../../assets/login.jpg")}
          style={{ width: width, height: "40%", marginTop: "10%" }}
        />
        <Text style={{ fontSize: 30, fontWeight: "900", textAlign: "center" }}>
          Login
        </Text>
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
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.login} onPress={() => navigation.navigate("Home")}>
          <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <View style={styles.lineview}>
          <Text style={{ marginHorizontal: 10 }}>or sign in with</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 35,
            marginTop: 15,
          }}
        >
          <TouchableOpacity>
            <AntDesign name="google" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="facebook-square" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="twitter" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 5,
            marginTop: 20,
          }}
        >
          <Text style={{ textAlign: "center", color: "black", fontSize: 16 }}>
            Don't have an account?
          </Text>
          <TouchableOpacity>
            <Text
              onPress={() => navigation.navigate("SignUp")}
              style={{
                textAlign: "center",
                color: "#007BFF",
                fontSize: 16,
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              Sign Up
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
  forgotPassword: {
    width: "80%",
    alignSelf: "center",
    textAlign: "right", // Align text to the right within the container
    color: "#007BFF", // Optional: Change color to match the design
    fontSize: 12,
  },
  login: {
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
});

export default LoginScreen;
