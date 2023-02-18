import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
export default function Categories() {
  return (
    <ScrollView 
    contentContainerStyle={{ paddingBottom: 15 ,
    paddingTop: 10, }}

    showsHorizontalScrollIndicator={false}
    horizontal
    >
    <CategoryCard imgUrl='https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg' title="testing1" />
    <CategoryCard imgUrl='https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg' title="testing1" />
     <CategoryCard imgUrl='https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg' title="testing1" />
     <CategoryCard imgUrl='https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg' title="testing1" />
     <CategoryCard imgUrl='https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg' title="testing1" />
     <CategoryCard imgUrl='https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg' title="testing1" />
     <CategoryCard imgUrl='https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg' title="testing1" />
     <CategoryCard imgUrl='https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg' title="testing1" />
     <CategoryCard imgUrl='https://payload.cargocollective.com/1/15/494563/13468564/roo-03_1340_c.jpg' title="testing1" />
    </ScrollView>
  )
}