import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import chat from '../../../assets/data/chats.json'
import { defaultStyles } from '@/constants/Styles'
import ChatRow from '../chats/ChatRow'

const Page = () => {
  return (
    <ScrollView
    contentInsetAdjustmentBehavior="automatic"
    contentContainerStyle={{ paddingBottom: 40, backgroundColor:'#fff' }}>
    <FlatList
    scrollEnabled={false}
    data={chat}
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={() => <View style={[defaultStyles.separator,{marginLeft:90}]}></View>}
    renderItem={({item})=> <ChatRow {...item}/>}
    />
    </ScrollView>
  )
}

export default Page