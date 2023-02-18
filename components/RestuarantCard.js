import { View, Text, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { StarIcon } from "react-native-heroicons/solid";

 const RestuarantCard= ({
    id, 
    imgUrl, 
    title,
    rating,
    description,
    genre,
    address,
    short_description,
    long,
    dishes,
    lat
 }) => {
  return (
    <TouchableOpacity className="bg-white shadow mr-3">
    <Image source={{
            uri: imgUrl,
        }}
        className= "h-36 w-64 rounded"
        />
        <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1" >
            <StarIcon opacity={0.5} size={22} color="#00CCBB" />  
        <Text>
            <Text className="text-green-500">{rating}</Text> •{genre}
        </Text>
        </View>
        <View className="flex-row items-center space-x-1">
            
            <Text>Nearby•{address} </Text>
        </View>
        </View>
      
    </TouchableOpacity>
  )
}
export default RestuarantCard;
