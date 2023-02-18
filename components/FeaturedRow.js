import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestuarantCard from "./RestuarantCard";


 const FeaturedRow=({title, description  , id})=> {
  return (
    <View> 
      <View className="mt-4 flex-row items-center justify-between px-4" >
      <Text>{title}</Text>
      <ArrowRightIcon color="#00CCBB" />
    </View>
    <Text className="text-xs text-gray-500 px-4">{description}</Text>
    <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
    >
    <RestuarantCard
     id={123}
    imgUrl='https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg'
    title="Poa Bhaji"
    rating={4}
    description="testing"
    genre="Indian"
    address="Dehradun"
    short_description="testing"
    long={4}
    dishes={[]}
    lat={4}
    />
    <RestuarantCard
     id={123}
    imgUrl='https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg'
    title="Poa Bhaji"
    rating={4}
    description="testing"
    genre="Indian"
    address="Dehradun"
    short_description="testing"
    long={4}
    dishes={[]}
    lat={4}
    />
    <RestuarantCard
     id={123}
    imgUrl='https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg'
    title="Poa Bhaji"
    rating={4}
    description="testing"
    genre="Indian"
    address="Dehradun"
    short_description="testing"
    long={4}
    dishes={[]}
    lat={4}
    />
    <RestuarantCard
     id={123}
    imgUrl='https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg'
    title="Poa Bhaji"
    rating={4}
    description="testing"
    genre="Indian"
    address="Dehradun"
    short_description="testing"
    long={4}
    dishes={[]}
    lat={4}
    />
    </ScrollView>
    
    </View>
    
 
  );
}
export default FeaturedRow;