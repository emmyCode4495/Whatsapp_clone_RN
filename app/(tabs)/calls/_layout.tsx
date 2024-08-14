import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const Layout = () => {
  return (
   <Stack>
       <Stack.Screen
        name="index"
        options={{
          title: "Calls",
          headerLargeTitle:true,
          headerShadowVisible:false,
          headerBlurEffect:'regular',
          headerTransparent:true,
          // headerStyle:{backgroundColor:Colors.background},
          headerSearchBarOptions:{
            placeholder:'Search'
          },
          headerRight: () =>(
            <TouchableOpacity>
                <Ionicons name="call-outline" color={Colors.primary}size={30}/>
            </TouchableOpacity>
          )
        }}
      />
   </Stack>
  )
}

export default Layout