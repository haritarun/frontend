import { StyleSheet, Text,FlatList,View} from 'react-native'
import React from 'react'
import ArticalCard from './ArticalCard'


const Data = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528',
      title: 'The Importance of Daily Exercise',
      para: 'Regular physical activity can help prevent chronic diseases and improve mental health. Experts recommend at least 30 minutes per day.'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
      title: 'Balanced Nutrition Guide',
      para: 'Learn how to build a healthy plate with proper portions of proteins, carbohydrates, and essential vitamins for optimal body function.'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db',
      title: 'Sleep and Mental Health Connection',
      para: 'New research shows how quality sleep reduces stress, improves memory, and lowers risk of depression and anxiety disorders.'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe',
      title: 'Managing Stress Effectively',
      para: 'Practical techniques including meditation, deep breathing exercises, and time management strategies to reduce daily stress.'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7',
      title: 'Heart Health Fundamentals',
      para: 'Understanding blood pressure, cholesterol levels, and lifestyle changes that can significantly improve cardiovascular health.'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
      title: 'Gut Health and Immunity',
      para: 'How your microbiome affects everything from digestion to disease resistance, and foods that promote healthy gut bacteria.'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      title: 'Hydration and Body Performance',
      para: 'The science behind water intake recommendations and how proper hydration affects energy levels, cognition, and physical performance.'
    }
];

const HealthArticals = () => {

  return (
  <View style={styles.offerContainer}>
    <Text style={{fontSize:17,color:'#456b52',fontWeight:700}}>Health Articals</Text>
    <FlatList 
    data={Data}
    renderItem={({item})=><ArticalCard data={item}/>}
    keyExtractor={item=>item.id}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    />
  </View>
   
  )
}

export default HealthArticals

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#ffffff',
        height:'auto',
        marginHorizontal:20,
        borderRadius:10,
        marginTop:20,
        padding:20,
        
      },
})