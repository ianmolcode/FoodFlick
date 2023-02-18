import { Text, View, Image, TextInput , ScrollView} from "react-native";
import React, {  useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";

export default function HomeScreen  ()  {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
        <Image
          source={{
            uri: "https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Delivery Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search bar */}
      
      {/* <View className="flex-row item-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View> */}

      <View className="flex-row item-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
            <TextInput 
            placeholder="Search for restaurants and cuisines"
            keyboardType="default"
            />
            
        </View>
        
         </View>


      {/* body */}


      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/* Categ */}
        <Categories />

        {/* features */}
        <FeaturedRow
            title="Featured Restaurants"
            description="Paid placements form our partners"
            id = "123"
        />
         <FeaturedRow
            title="Yummy Discounts"
            description="Everyone loves a good deal"
            id = "1234"
        />
         <FeaturedRow
            title="Offers near you!"
            description="Lets enjoy the offers and cheers for life."
            id = "12345"
        />
      </ScrollView>     
    </SafeAreaView>
  );
}
