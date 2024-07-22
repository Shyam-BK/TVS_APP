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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setLogin, setToken } from "../../redux/reducers/loginReducer";
import axiosInstance from "../services/api";


const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const width = Dimensions.get("screen").width;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Username and password are required");
      return;
    }

    setLoading(true);

    try {
      const response = await axiosInstance.post(`login/`, {
        username,
        password,
      });
      //console.log(response);

      if (response.status === 200) {
        //console.log(response);
        const token = response.data.token;
        const data = JSON.stringify(response.data);
        await AsyncStorage.setItem("userToken", token);
        await AsyncStorage.setItem("userData", data);
        dispatch(setLogin(true));
        dispatch(setToken(response.data.token));
        // dispatch(setData(response.data));
       
      }
    }
     catch (error) {
      Alert.alert("Error", "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

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

        <TouchableOpacity style={styles.login} onPress={handleLogin} disabled={loading}>
          <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
            {loading ? "Logging in..." : "LOGIN"}
          </Text>
        </TouchableOpacity>
        

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
