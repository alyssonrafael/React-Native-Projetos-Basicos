import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {StatusBar} from "react-native";
import Passwords from "./pages/passwords";
import { Home } from "./pages/home/home";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="home" />;
            }
            return <Ionicons size={size} color={color} name="home-outline" />;
          },
        }}
      />
      <Tab.Screen
        name="passwords"
        component={Passwords}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons size={size} color={color} name="lock-closed" />;
            }
            return (
              <Ionicons size={size} color={color} name="lock-closed-outline" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
