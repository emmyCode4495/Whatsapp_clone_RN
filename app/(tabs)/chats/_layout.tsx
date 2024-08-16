import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const Layout = () => {
  return (
   <Stack>
       <Stack.Screen
        name="index"
        options={{
          title: "chats",
          headerLargeTitle:true,
          headerBlurEffect:'regular',
          headerTransparent:true,
          headerStyle:{backgroundColor:"#fff"},
          headerSearchBarOptions:{
            placeholder:'Search'
          },
          
          headerRight: () =>(
            <View style={{flexDirection:'row', gap:30}}>
            <TouchableOpacity>
                <Ionicons name="call-outline" color={Colors.primary} size={30}/>
            </TouchableOpacity>
            <Link href="/" asChild>
                 <TouchableOpacity>
                 <Ionicons name="add-circle" color={Colors.primary}size={30}/>
             </TouchableOpacity>
             </Link>
             </View>
          ),
          headerLeft: () =>(
            <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal-circle-outline" color={Colors.primary} size={30}/>
            </TouchableOpacity>
          )
        }}
      />
   </Stack>
  )
}

export default Layout