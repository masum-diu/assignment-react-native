import { View, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Searchbar } from 'react-native-paper';
import CalenderComponents from '../components/CalenderComponents';
import MyCard from '../components/MyCard';
const Activities = () => {
    const [selectedTime, setSelectedTime] = useState("");

    const timeSlots = ["12:00", "11:00", "10:00"];
    return (
        <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 30 }}>
                <View >
                    <Text>Hello,</Text>
                    <Text style={{ fontWeight: "bold" }}>Good morning</Text>
                </View>
                <View>
                    <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />
                </View>

            </View>
            <Searchbar placeholder='Search center' />
            <CalenderComponents />
            <MyCard imageUrl={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                title={"PLCE Padel"}
                description={"Södertälje, Sweden - 17km"}
            />
             <FlatList
             style={{marginTop:20}}
      horizontal
      data={timeSlots}
      keyExtractor={(item) => item}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => setSelectedTime(item)}
          style={{
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
            width: 100,
            height: 50,
            borderRadius: 15,
            borderWidth: 1,
            borderColor: item === selectedTime ? "#b2db00" : "gray",
            backgroundColor: "transparent",
          }}
        >
          <Text
            style={{
              color: item === selectedTime ? "#b2db00" : "#000",
              fontSize: 16,
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />


        </View>
    )
}

export default Activities