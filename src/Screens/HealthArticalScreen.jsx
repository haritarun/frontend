import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React,{useLayoutEffect} from 'react';
import { useNavigation, useRoute,useState } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';
import ArticalCard from '../Components/HomeScreenComponents/ArticalCard';

const HealthArticlesData = [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528',
      title: 'The Importance of Daily Exercise',
      brief: 'Regular physical activity is crucial for maintaining overall health.',
      description: 'Exercise helps prevent chronic diseases like diabetes, heart disease, and obesity. It also improves mental health by reducing symptoms of depression and anxiety.',
      benefits: [
        'Boosts cardiovascular health',
        'Improves mood and mental health',
        'Strengthens muscles and bones',
        'Enhances sleep quality'
      ],
      recommendations: 'Aim for at least 150 minutes of moderate exercise or 75 minutes of vigorous exercise weekly.'
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
      title: 'Balanced Nutrition Guide',
      brief: 'Proper nutrition is the foundation of good health.',
      description: 'A balanced diet provides all the essential nutrients your body needs to function optimally and prevent nutritional deficiencies.',
      benefits: [
        'Maintains healthy body weight',
        'Reduces risk of chronic diseases',
        'Boosts immune system',
        'Improves energy levels'
      ],
      recommendations: 'Follow the plate method: 50% vegetables, 25% protein, 25% whole grains.'
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1494390248081-4e521a5940db',
      title: 'Sleep and Mental Health Connection',
      brief: 'Quality sleep is essential for mental wellbeing and cognitive function.',
      description: 'New research shows how quality sleep reduces stress, improves memory, and lowers risk of depression and anxiety disorders by allowing proper brain recovery and neurotransmitter regulation.',
      benefits: [
        'Reduces stress and anxiety',
        'Improves memory and concentration',
        'Lowers risk of mental health disorders',
        'Enhances emotional regulation'
      ],
      recommendations: 'Aim for 7-9 hours of quality sleep each night with consistent sleep and wake times.'
    },
    {
      id: '4',
      imageUrl: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe',
      title: 'Managing Stress Effectively',
      brief: 'Effective stress management improves quality of life and prevents burnout.',
      description: 'Practical techniques including meditation, deep breathing exercises, and time management strategies to reduce daily stress and prevent its negative health impacts.',
      benefits: [
        'Lowers blood pressure',
        'Improves emotional wellbeing',
        'Enhances productivity',
        'Reduces risk of stress-related illnesses'
      ],
      recommendations: 'Practice 10-15 minutes of mindfulness meditation daily and learn to prioritize tasks effectively.'
    },
    {
      id: '5',
      imageUrl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7',
      title: 'Heart Health Fundamentals',
      brief: 'Understanding and maintaining cardiovascular health is key to longevity.',
      description: 'Comprehensive guide to blood pressure, cholesterol levels, and lifestyle changes that can significantly improve cardiovascular health and reduce risk of heart disease.',
      benefits: [
        'Reduces risk of heart attack and stroke',
        'Improves circulation',
        'Lowers blood pressure',
        'Increases energy and stamina'
      ],
      recommendations: 'Get regular check-ups, maintain a heart-healthy diet, exercise regularly, and avoid smoking.'
    },
    {
      id: '6',
      imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
      title: 'Gut Health and Immunity',
      brief: 'A healthy gut microbiome strengthens your immune system.',
      description: 'How your microbiome affects everything from digestion to disease resistance, and foods that promote healthy gut bacteria for optimal immune function and overall health.',
      benefits: [
        'Strengthens immune system',
        'Improves digestion',
        'Reduces inflammation',
        'Enhances nutrient absorption'
      ],
      recommendations: 'Consume probiotic-rich foods like yogurt and fermented foods, and eat plenty of fiber from fruits and vegetables.'
    },
    {
      id: '7',
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      title: 'Hydration and Body Performance',
      brief: 'Proper hydration is essential for all bodily functions.',
      description: 'The science behind water intake recommendations and how proper hydration affects energy levels, cognition, and physical performance throughout the day.',
      benefits: [
        'Improves cognitive function',
        'Enhances physical performance',
        'Regulates body temperature',
        'Supports kidney function'
      ],
      recommendations: 'Drink at least 8 glasses (2 liters) of water daily, more if active or in hot climates.'
    }
];

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



const HealthArticleScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  
  useLayoutEffect(()=>{
    navigation.getParent()?.setOptions({
      tabBarStyle:{display:'none'}
    })
  })

  const data = Data.filter((item) => item.title !== route.params.articalData?.title);

  const selectedArticle = HealthArticlesData.find(
    article => article.title === route.params.articalData.title
  );

  
  if (!selectedArticle) {
    return (
      <View style={styles.container}>
        <Text>Article not found</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.detailContainer}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={24} color="#333" />
      </TouchableOpacity>
      
      <Image source={{ uri: selectedArticle.imageUrl }} style={styles.detailImage} />
      
      <View style={styles.detailContent}>
        <Text style={styles.detailTitle}>{selectedArticle.title}</Text>
        
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.detailText}>{selectedArticle.description}</Text>
        
        <Text style={styles.sectionTitle}>Key Benefits</Text>
        {selectedArticle.benefits.map((benefit, index) => (
          <View key={index} style={styles.benefitItem}>
            <Icon name="check-circle" size={16} color="#4CAF50" style={styles.bulletIcon} />
            <Text style={styles.benefitText}>{benefit}</Text>
          </View>
        ))}
        
        <Text style={styles.sectionTitle}>Recommendations</Text>
        <Text style={styles.detailText}>{selectedArticle.recommendations}</Text>
      </View>
      <View style={{marginHorizontal:20}}>
        <Text style={styles.sectionTitle}>Related Articles</Text>
        <FlatList 
        data={data}
        renderItem={({item})=><ArticalCard data={item}/>}
        keyExtractor={item=>item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 20,
  },
  articleCard: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  articleImage: {
    width: '100%',
    height: 120,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    padding: 12,
    paddingBottom: 4,
  },
  articleBrief: {
    fontSize: 14,
    color: '#666',
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  detailContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 20,
    padding: 8,
  },
  detailImage: {
    width: '100%',
    height: 250,
  },
  detailContent: {
    padding: 20,
  },
  detailTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginTop: 16,
    marginBottom: 8,
  },
  detailText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 8,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bulletIcon: {
    marginRight: 8,
  },
  benefitText: {
    fontSize: 16,
    color: '#555',
    flex: 1,
  },
});

export default HealthArticleScreen;