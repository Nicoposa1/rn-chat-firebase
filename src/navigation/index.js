import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Chat from "../screens/Chat";

// import ChatStack from "./ChatStack"

const Stack = createStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatStack" component={Chat} />
    </Stack.Navigator>
  );
}

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ChatStack" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;
