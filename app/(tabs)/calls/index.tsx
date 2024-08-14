import { View, Text, TouchableOpacity, ScrollView, FlatList, StyleSheet, Image } from 'react-native'
import React, { useState,useEffect } from 'react'
import { Stack } from 'expo-router'
import Colors from '@/constants/Colors'
import calls from '@/assets/data/calls.json'
import { defaultStyles } from '@/constants/Styles'
import { Ionicons } from '@expo/vector-icons'
import { format } from 'date-fns'
import { SegmentedControl } from '@/components/SegmentedControl'
import Animated, { CurvedTransition, FadeInUp, FadeOutUp, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import SwipeableRow from '@/components/SwipeableRow'
import * as Haptics from 'expo-haptics'

const transition = CurvedTransition.delay(100);

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)

const Page = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [items, setItems] = useState(calls);
  const [selectedOption, setSelectedOption] = useState("All")
  const editing = useSharedValue(-30)

  const onEdit = () =>{
    let editingNew = !isEditing
    editing.value = editingNew ? 0 : -30
    setIsEditing(editingNew)
  }

  useEffect(()=>{
    if(selectedOption === 'All'){
      setItems(calls)
    }else{
      setItems(calls.filter((item)=>item.missed))
    }
  }, [selectedOption])

  const removeCall = (item: any) =>{
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    setItems(items.filter((i)=> i.id !== item.id))
  }

  const animatedStyles = useAnimatedStyle(() => ({
    transform:[{translateX: editing.value}]
  }))

  return (
    <View style={{ flex: 1, backgroundColor: Colors.background }}>
      <Stack.Screen
        options={{
          headerTitle: () =>(
            <SegmentedControl options={['All', 'Missed']} selectedOption={selectedOption}
            onOptionPress={setSelectedOption}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={onEdit}>
              <Text style={{ color: Colors.primary, fontSize: 18 }}>
                {isEditing ? "Done" : "Edit"}
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Animated.View style={defaultStyles.block} layout={transition}>
          <Animated.FlatList
          skipEnteringExitingAnimations
            data={items}
            scrollEnabled={false}
            contentContainerStyle={{paddingBottom:40}}
            itemLayoutAnimation={transition}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => (
              <View style={defaultStyles.separator} />
            )}
            renderItem={({ item, index}) => (
              <SwipeableRow onDelete={() => removeCall(item)}>
              <Animated.View entering={FadeInUp.delay(index * 20)} exiting={FadeOutUp}>
                <AnimatedTouchableOpacity onPress={()=>removeCall(item)}
                style={[animatedRowStyles]}
                ></AnimatedTouchableOpacity>
              <View style={[defaultStyles.item]}>
                <Image source={{ uri: item.img }} style={styles.avatar} />
                <View style={{ flex: 1, gap: 2 }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: item.missed ? Colors.red : "#000",
                    }}
                  >
                    {item.name}
                  </Text>

                  <View style={{ flexDirection: "row", gap: 4 }}>
                    <Ionicons
                      name={item.video ? "videocam" : "call"}
                      size={16}
                      color={Colors.gray}
                    />
                    <Text style={{ color: Colors.gray, flex: 1 }}>
                      {item.incoming ? "Incoming" : "Outgoing"}
                    </Text>
                  </View>
                </View>

                <View
                      style={{
                        flexDirection: 'row',
                        gap: 6,
                        alignItems: 'center',
                      }}>
                      <Text style={{ color: Colors.gray }}>{format(item.date, 'MM.dd.yy')}</Text>
                      <Ionicons
                        name="information-circle-outline"
                        size={24}
                        color={Colors.primary}
                      />
                    </View>
              </View>
              </Animated.View>
              </SwipeableRow>
            )}
          />
        </Animated.View>
      </ScrollView>
    </View>
  );
}

export default Page

const styles = StyleSheet.create({
  avatar:{
    width:40,
    height:40,
    borderRadius:20
  }
})