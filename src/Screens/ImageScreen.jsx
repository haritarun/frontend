import { StyleSheet, Text, View, Image, Dimensions, ScrollView,TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import SkinCare from '../Components/ProductComponents/SkinCare';
import Brand from '../Components/HomeScreenComponents/Brand';
import EveryDayEssentialsAll from './EveryDayEssentialsAll';

const { width } = Dimensions.get('window');

const recommendedProducts = [
    {
      id: 1,
      imageUrl: 'https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg',
      name: 'Paracetamol 500mg',
      price: '$5.00',
      rating: 4.8,
      reviews: 120,
      type: 'Tablet',
    },
    {
      id: 2,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdN9m9qCC5sIvF8AB2cnAODbqNconc1J2ItQ&s',
      name: 'Ibuprofen 400mg',
      price: '$6.50',
      rating: 4.5,
      reviews: 95,
      type: 'Tablet',
    },
    {
      id: 3,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdN9m9qCC5sIvF8AB2cnAODbqNconc1J2ItQ&s',
      name: 'Antifungal Soap',
      price: '$3.50',
      rating: 4.3,
      reviews: 80,
      type: 'Soap',
    },
    {
      id: 4,
      imageUrl: 'https://m.economictimes.com/thumb/msid-55385973,width-1200,height-1200,resizemode-4,imgsize-46934/how-to-cut-your-medicine-bills.jpg',
      name: 'Aspirin 325mg',
      price: '$4.00',
      rating: 4.7,
      reviews: 110,
      type: 'Tablet',
    },
  ];

const Data = [
  {
    id: 1,
    imageUrl: 'https://images.aeonmedia.co/images/afef287f-dd6f-4a6a-b8a6-4f0a09330657/sized-kendal-l4ikccachoc-unsplash.jpg',
    title: 'Premium Healthcare',
    subtitle: '24/7 Medical Support'
  },
  {
    id: 2,
    imageUrl: 'https://content3.jdmagicbox.com/comp/guntur/n2/9999px863.x863.190302122759.v8n2/catalogue/online-medical-services-guntur-0jq42bbxuz.jpg',
    title: 'Online Consultation',
    subtitle: 'Talk to Doctors Instantly'
  },
  {
    id: 3,
    imageUrl: 'https://www.chatbot.com/images/og-images/livechat.c2d4958432e2015140f038fdf555db649ccfe97ef66f3fc68528a90cf4736c59.jpg',
    title: 'Medicine Delivery',
    subtitle: 'At Your Doorstep'
  },
];

const medicalData = {
  name: "Elite Medical Center",
  price: "$120",
  rating: "4.7",
  reviews: '122',
  distance: "1.2 Km",
  advantages: [
    "24/7 ",
    "Free ",
    "Lab Test ",
    "Ambulance",
    "Health",
    "Senior",
    "Online"
  ]
};

const ImageScreen = ({route}) => {
  const navigation = useNavigation();

  const {previousScreen} = route.params
  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' }
    });
  }, []);

  return (
    <View style={{ flex: 1 ,backgroundColor:'#ffffff'}}>
      <View style={styles.container}>
        <Swiper autoplayTimeout={3} loop={true} autoplay={true} style={{ height: 1000 }}>
          {Data.map((eachItem) => (
            <View key={eachItem.id} style={{ height: 1000 }}>
              <Image source={{ uri: eachItem.imageUrl }} style={{ height: 500, width: '100%' }} />
            </View>
          ))}
        </Swiper>
      </View>

      <View style={styles.headerIcons}>
        <TouchableOpacity style={styles.iconCircle} onPress={()=>{navigation.navigate(previousScreen)}}>
          <Icon name="left" size={20} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconCircle} onPress={()=>{navigation.navigate('Doctors',{screen:'CartScreen'})}}>
          <Feather name="shopping-cart" size={20} />
        </TouchableOpacity>
      </View>

      <ScrollView 
      showsVerticalScrollIndicator={false}
      style={styles.contentCard}
      >
      <View>
        <View style={styles.titleRow}>
          <Text style={styles.nameText}>{medicalData.name}</Text>
          <Text style={styles.priceText}>
            {medicalData.price} /
            <Text style={styles.consultationText}> Consultation</Text>
          </Text>
        </View>

        <View style={styles.ratingRow}>
          <Icon name={'star'} size={23} color={'#FFD700'} />
          <Text style={styles.ratingText}>{medicalData.rating}</Text>
          <Text style={styles.reviewsText}>
            ( {medicalData.reviews}
            <Text style={styles.reviewsLabel}> Reviews</Text> )
          </Text>
        </View>
            
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>

          {medicalData.advantages.map((eachItem, index) => (

            <View key={index} style={{ backgroundColor: '#f0efef', borderRadius: 50, height: 60, width: 100, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginRight: 22 }}>
              <Text style={{color:'#2b2a2a',fontWeight:700}}>{eachItem}</Text>
            </View>
          ))}
        </ScrollView>
        <Text style={{fontSize:20,marginTop:20,color:'#2a2424',fontWeight:700}}>
            Description
        </Text>
        <Text style={{fontSize:15,lineHeight:20,color:'#989494',marginTop:10,fontWeight:500,}}>
        Paracetamol 500mg is a widely used pain reliever and fever reducer. 
        It helps alleviate headaches, muscle aches, and mild flu symptoms. 
        Recommended dosage should be followed to avoid liver damage
        </Text>
        <View style={styles.sectionContainer}>
      
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={styles.sectionTitle}>Recommnded Items</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Doctors',{screen:'EveryDayEssentialsAll'})}}>
        <Text style={{fontSize:15,fontWeight:700,color:'#9c9898'}}>View All</Text>
        </TouchableOpacity>
      </View>

      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {recommendedProducts.map((product) => (
          <View key={product.id} style={styles.productCard}>
            
            <Image
              source={{ uri: product.imageUrl }}
              style={styles.productImage}
              resizeMode="cover"
            />

            
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productType}>{product.type}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>

              
              <View style={styles.ratingContainer}>
                <Icon name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>
                  {product.rating} ({product.reviews} Reviews)
                </Text>
              </View>
            </View>

            
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
        </View>
    </View>
      <Brand />
        <View style={styles.sectionContainer}>
      
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={styles.sectionTitle}>Recommnded Items</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('Doctors',{screen:'EveryDayEssentialsAll'})}}>
        <Text style={{fontSize:15,fontWeight:700,color:'#9c9898'}}>View All</Text>
        </TouchableOpacity>
      </View>

      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {recommendedProducts.map((product) => (
          <View key={product.id} style={styles.productCard}>
            
            <Image
              source={{ uri: product.imageUrl }}
              style={styles.productImage}
              resizeMode="cover"
            />

            
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productType}>{product.type}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>

              
              <View style={styles.ratingContainer}>
                <Icon name="star" size={16} color="#FFD700" />
                <Text style={styles.ratingText}>
                  {product.rating} ({product.reviews} Reviews)
                </Text>
              </View>
            </View>

            
            <TouchableOpacity style={styles.addButton}>
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
        </View>
      </ScrollView>

      <TouchableOpacity style={{marginTop:20,marginBottom:20,height:55,width:'90%',backgroundColor:'#2b2b2a',borderRadius:20,justifyContent:'center',alignItems:'center',marginHorizontal:20}}>
        <Text style={{fontSize:20,color:'#ffffff',fontWeight:700,fontSize:20}}>Add To Cart</Text>
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:350
  },
  slide: {
    height: 'auto',
    width: width,
    
  },
  headerIcons: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginHorizontal:20,
    marginTop: 20,
  },
  iconCircle: {
    height: 40,
    width: 40,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentCard: {
    height:'auto',
    width: '96%',
    backgroundColor: '#ffffff',
    marginTop:-50,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  nameText: {
    fontSize: 23,
    fontWeight: '700',
    color: '#393535',
  },
  priceText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#393535',
  },
  consultationText: {
    fontSize: 14,
    color: '#888686',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 20,
    fontWeight: '700',
    color: '#393535',
  },
  reviewsText: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: '700',
    color: '#888686',
  },
  reviewsLabel: {
    fontSize: 15,
  },
  sectionContainer: {
    paddingVertical: 20,
    marginBottom:0,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom:5
  },
  scrollView: {
    flexGrow: 0,
  },
  scrollContent: {
    paddingRight: 15, 
  },
  productCard: {
    width: 160,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginRight: 20,
    padding: 10,
    
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  productInfo: {
    marginTop: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  productType: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007BFF',
    marginTop: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 5,
  },
  addButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ImageScreen;
