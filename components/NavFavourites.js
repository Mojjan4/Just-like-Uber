import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Flatlist, View } from 'react-native'
import { icon } from 'react-native-elements'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import tw from 'tailwind-react-native-classnames';


const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Penselgatan 10, Göteborg, SW",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "anders carlssons gata 14, Göteborg, SW"
  },
];

const NavFavourites = () => {
  return (
    <Flatlist 
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeperatorComponent={() => (
        <View style={[tw`bg-gray-200`, {height: 0.5}]}/>
      )}
      renderItem={({item: {location, destination, icon}}) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon 
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type={"ionicon"}
            color={"white"}
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})
