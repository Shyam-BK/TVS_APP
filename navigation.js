import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import PrivacyPolicyScreen from './src/screens/PrivacyPolicyScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from './redux/reducers/loginReducer';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const Navigator = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const storedToken = await AsyncStorage.getItem('userToken');
      if (storedToken) {
        dispatch(setToken(storedToken));
      }
      setLoading(false);
    };
    checkToken();
  }, [dispatch]);

  if (loading) {
    return null; // Optionally, show a loading spinner
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={token ? "Home" : "Login"}
        screenOptions={screenOptions}
      >
        {token ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Notifications" component={NotificationScreen} />
            <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
