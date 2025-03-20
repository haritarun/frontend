import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Data = [
  { 
    id: 1, 
    title: 'Vitamins A-Z', 
    imageUrl: 'https://i0.wp.com/medika.life/wp-content/uploads/2021/05/Vitamins.jpg?fit=1200%2C856&ssl=1' 
  },
  { 
    id: 2, 
    title: 'Glucometers', 
    imageUrl: 'https://premmedical.in/wp-content/uploads/2021/05/httpspremmedical.inproductaccu-chek-active%E2%80%A6-free-multicolor3.jpg' 
  },
  { 
    id: 3, 
    title: 'Sports Nutrition', 
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Yd62jT12XD7QNeDePnYF1pBjOkJ0RW3Iaw&s' 
  },
  { 
    id: 4, 
    title: 'Adult Diapers', 
    imageUrl: 'https://vietsingdnd.com/wp-content/uploads/2023/12/20012024-Website-VietsingDND-Anh-bai-viet-TV-12.jpg' 
  },
  { 
    id: 5, 
    title: 'Ayurvedic Care', 
    imageUrl: 'https://m.media-amazon.com/images/I/31dJHFzPjeL._AC_UF1000,1000_QL80_.jpg' 
  },
  { 
    id: 6, 
    title: 'Respiratory Care', 
    imageUrl: 'https://img.freepik.com/free-vector/respiratory-care-technology-template-vector_53876-119563.jpg' 
  },
  { 
    id: 7, 
    title: 'Women Care', 
    imageUrl: 'https://m.media-amazon.com/images/I/71s9AkrXk7L.jpg' 
  },
  { 
    id: 8, 
    title: 'Diabetic Care', 
    imageUrl: 'https://m.media-amazon.com/images/I/71s9AkrXk7L.jpg' 
  },
  { 
    id: 9, 
    title: 'Mother and Baby Care', 
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYfEOdGcdoXf-iWljW4BMtXrrE3dasyTeNRQ&s' 
  },
  { 
    id: 10, 
    title: 'Homeopathy Care', 
    imageUrl: 'https://www.shutterstock.com/image-photo/homeopathic-medication-tablets-bottle-on-260nw-113505316.jpg' 
  },
];
const AllCategories = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.offerContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>All Categorys</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("Doctors",{screen:'AllCategory'})}}>
          <Text style={styles.viewAllText}>See More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>jpg
        {Data.map((item) => (
          <TouchableOpacity key={item.id} style={styles.card}>
            <Image
              source={{ uri: item.imageUrl }}
              style={styles.cardImage}
              resizeMode="contain"
            />
            <Text style={styles.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default AllCategories;

const styles = StyleSheet.create({
  offerContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 20,
    padding: 15,
    borderRadius: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerText: {
    color: '#1a3c34',
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewAllText: {
    color: '#007a7a',
    fontSize: 14,
    fontWeight: '600',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%', 
    height: 180,
    backgroundColor: '#f8faf9',
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e6eceb',
  },
  cardImage: {
    width: 110,
    height: 110,
    marginBottom: 10,
  },
  cardTitle: {
    color: '#1a3c34',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});