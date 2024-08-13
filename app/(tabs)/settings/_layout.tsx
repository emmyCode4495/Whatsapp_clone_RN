import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Colors from "@/constants/Colors";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Settings",
          headerLargeTitle:true,
          headerShadowVisible:false,
          headerStyle:{backgroundColor:Colors.background},
          headerSearchBarOptions:{
            placeholder:'Search'
          }
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default Layout;
