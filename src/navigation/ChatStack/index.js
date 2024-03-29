import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Chat from "../../screens/Chat";
import Login from "../../screens/Login";
import Signup from "../../screens/Signup";
import Home from "../../screens/Home";

const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};
export default ChatStack;
