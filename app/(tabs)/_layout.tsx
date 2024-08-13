import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import UpdateIcon from '@expo/vector-icons/MaterialIcons'
import CallIcon from '@expo/vector-icons/MaterialCommunityIcons'
import ChatIcon from '@expo/vector-icons/Ionicons'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'

const Layout = () => {
  return (
<GestureHandlerRootView style={{flex:1}}>
<Tabs screenOptions={{
    tabBarStyle:{backgroundColor:Colors.background},
    tabBarActiveTintColor: Colors.primary,
    tabBarInactiveTintColor:Colors.background,
    tabBarInactiveBackgroundColor:Colors.background,
    tabBarActiveBackgroundColor:Colors.background,
    headerStyle:{
        backgroundColor:Colors.background
    },
    headerShadowVisible:false
    
}}>
    <Tabs.Screen name="updates" options={{
        title:'updates',
        tabBarIcon:({size, color}) =>(
            <UpdateIcon 
            name="update"
            size={size}
            />
        )
    }}/>
    <Tabs.Screen name="calls" options={{
        title:'calls',
        headerShown:false,
        tabBarIcon:({size, color})=>(
            <CallIcon 
            name="phone-outline"
            size={size}
            />
        )
    }}/>
      <Tabs.Screen name="communities" options={{
        title:'Communities',
        tabBarIcon:({size, color})=>(
            <UpdateIcon 
            name="people"
            size={size}
            />
        )
    }}/>
     <Tabs.Screen name="Chats" options={{
        title:'Chats',
        tabBarIcon:({size, color})=>(
            <ChatIcon 
            name="chatbubbles"
            size={size}
            />
        )
    }}/>
    <Tabs.Screen name="settings" options={{
        title:'Settings',
        headerShown:false,
        tabBarIcon:({size, color})=>(
            <ChatIcon 
            name="cog"
            size={size}
            />
        )
    }}/>
</Tabs>
</GestureHandlerRootView>
)}

export default Layout