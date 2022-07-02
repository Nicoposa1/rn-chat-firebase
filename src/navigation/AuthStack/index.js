import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Chat from "../../screens/Chat";
import Login from "../../screens/Login";
import Signup from "../../screens/Signup";
import Home from "../../screens/Home";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};
export default AuthStack;
