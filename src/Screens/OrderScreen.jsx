import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Image,ScrollView,Button } from 'react-native';
import React, { useState,useLayoutEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDegine from 'react-native-vector-icons/MaterialIcons'; 
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'; 

const CartScreen = () => {
        const navigation = useNavigation();
        
        const [isModelVisiable,setModelVisiable]=useState(false)
        const [isFilterModel,setFilterModel]=useState(false)
        const [priceRange, setPriceRange] = useState([0, 50]);
    
        const [searchQuery, setSearchQuery] = useState('');
        const [selectedFilter, setSelectedFilter] = useState('All');
    
        const toggleMode=()=>{
            setModelVisiable(!isModelVisiable)
        }
    
        const filterMode =()=>{
            setFilterModel(!isFilterModel)
        }
        
        const [items, setItems] = useState([
            { id: '1', title: 'Toothbrush', price: 4, rating: 4.5, imageUrl: 'https://m.media-amazon.com/images/I/61yu+5jpt5L._AC_UF1000,1000_QL80_.jpg', category: 'Personal Care' },
            { id: '2', title: 'Shampoo', price: 8, rating: 4.7, imageUrl: 'https://greencairoindia.com/wp-content/uploads/2018/06/shikakai-shampooo.png', category: 'Personal Care' },
            { id: '3', title: 'Notebook', price: 3, rating: 4.2, imageUrl: 'https://m.media-amazon.com/images/I/71GhsI7TeZL._AC_UF1000,1000_QL80_.jpg', category: 'Stationery' },
            { id: '4', title: 'Pen Set', price: 5, rating: 4.8, imageUrl: 'https://tinybo.in/cdn/shop/files/dual-side-sketch-pen-set-1.png?v=1734329939', category: 'Stationery' },
            { id: '5', title: 'Water Bottle', price: 12, rating: 4.6, imageUrl: 'https://nestasia.in/cdn/shop/products/DSCF0620.jpg?v=1678173254&width=600', category: 'Household' },
            { id: '6', title: 'Coffee Mug', price: 6, rating: 4.4, imageUrl: 'https://m.media-amazon.com/images/I/81fztNdEOcL.jpg', category: 'Household' },
            { id: '7', title: 'Toothbrush', price: 4, rating: 4.5, imageUrl: 'https://m.media-amazon.com/images/I/61yu+5jpt5L._AC_UF1000,1000_QL80_.jpg', category: 'Personal Care' },
            { id: '8', title: 'Shampoo', price: 8, rating: 4.7, imageUrl: 'https://greencairoindia.com/wp-content/uploads/2018/06/shikakai-shampooo.png', category: 'Personal Care' },
            { id: '9', title: 'Notebook', price: 3, rating: 4.2, imageUrl: 'https://m.media-amazon.com/images/I/71GhsI7TeZL._AC_UF1000,1000_QL80_.jpg', category: 'Stationery' },
            { id: '10', title: 'Pen Set', price: 5, rating: 4.8, imageUrl: 'https://tinybo.in/cdn/shop/files/dual-side-sketch-pen-set-1.png?v=1734329939', category: 'Stationery' },
            { id: '11', title: 'Water Bottle', price: 12, rating: 4.6, imageUrl: 'https://nestasia.in/cdn/shop/products/DSCF0620.jpg?v=1678173254&width=600', category: 'Household' },
            { id: '12', title: 'Coffee Mug', price: 6, rating: 4.4, imageUrl: 'https://m.media-amazon.com/images/I/81fztNdEOcL.jpg', category: 'Household' },
            
        ]);
    
        const [brands,setBrands] = useState([
            {
                id:1,
                title:'Pfizer'
            },
            {
                id:2,
                title:'Johnson'
            },
            {
                id:3,
                title:'Novartis'
            },
            {
                id:4,
                title:'Roche'
            },
            {
                id:5,
                title:'Bayer'
            },
            {
                id:6,
                title:'Abbott'
            },
            {
                id:7,
                title:'AstraZeneca'
            },
            {
                id:8,
                title:'Sanofi'
            },
            {
                id:9,
                title:'Merck'
            },
            {
                id:10,
                title:'Pfizer'
            },
    
        ])
    
        const ratings = [
            { id: '1', title: '1 ', value: 1 },
            { id: '2', title: '2', value: 2 },
            { id: '3', title: '3', value: 3 },
            { id: '4', title: '4', value: 4 },
            { id: '5', title: '5', value: 5 },
        ];
    
    
        useLayoutEffect(()=>{
            navigation.getParent()?.setOptions({
                tabBarStyle:{display:'none'}
            })
        })
    

    const getNavigate=()=>{
        navigation.navigate('Product')
    }
  return (
    <View style={styles.headerContainer}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <View style={{height:30,width:30,borderRadius:50,borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                    <Icon 
                        name="arrowleft" 
                        size={20} 
                        color={'gray'} 
                        style={{ fontWeight: 700 }} 
                        onPress={() => navigation.navigate('Account')} 
                    />
                </View>
                <Text style={styles.title}>Order</Text>
                <Text style={{color:'#ed9a3a',fontWeight:'bold'}} onPress={()=>{getNavigate()}}>Add Items</Text>
          </View>
             <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                                <View style={styles.searchContainer}>   
                                    <AntDegine name="search" size={20} color="#888" style={styles.searchIcon} />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Search..."
                                        placeholderTextColor="#888"
                                        value={searchQuery}
                                        onChangeText={(val)=>{setSearchQuery(val)}}
                                    />
                                    <TouchableOpacity onPress={() => filterMode()} >
                                        <AntDegine name="filter-list" size={20} color="#888" style={styles.filterIcon} />
                                    </TouchableOpacity>
                                    <Modal 
                                    isVisible={isFilterModel}
                                    backdropOpacity={0.5}
                                    onBackdropPress={filterMode}
                                    animationIn={"slideInUp"}
                                    animationOut={"slideOutDown"}
                                    style={styles.FilterModal}
                                    >
                                        <View style={{height:600,backgroundColor:'#f5f5f5',borderTopLeftRadius:40,borderTopRightRadius:40,paddingLeft:20,paddingTop:20,paddingRight:20}}>
                                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}} onPress={()=>{filterMode()}}>
                                                    <Entypo name="chevron-left" size={30} />
                                                    <Text style={{fontWeight:700,fontSize:25,marginLeft:10}}>Filter</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity>
                                                    <Text style={{justifyContent:'flex-end',color:"#666",fontSize:17,marginRight:10,marginTop:10,fontWeight:700}}>Reset</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={{marginTop:30,fontSize:20,fontWeight:700,marginLeft:10,letterSpacing:1.5}}>
                                                Category
                                            </Text>
                                            <ScrollView 
                                                horizontal
                                                showsHorizontalScrollIndicator={false}
                                            >
                                                <View style={styles.filterContainer}>
                                                    {
                                                        brands.map(eachItem=>(
                                                            <TouchableOpacity style={{height:50,width:'auto',backgroundColor:'#f0f0f0',paddingHorizontal: 18,
                                                                paddingVertical: 15,borderRadius:30,marginLeft:10,marginTop:15}} >
                                                                <Text style={{fontSize:16,color:'#666',fontWeight:700}}>{eachItem.title}</Text>
                                                            </TouchableOpacity>
                                                        ))
                                                    }
                                                </View>
                                            </ScrollView>
                                            <Text style={{fontSize:20,fontWeight:700,marginLeft:10,letterSpacing:1.5}}>
                                                Brand
                                            </Text>
                                            <ScrollView 
                                                horizontal
                                                showsHorizontalScrollIndicator={false}
                                            >
                                                <View style={styles.filterContainer}>
                                                    {
                                                        ['Personal Care', 'Baby Care','Skin Care','usehold', 'Stationery'].map(eachItem=>(
                                                            <TouchableOpacity style={{height:50,width:'auto',backgroundColor:'#f0f0f0',paddingHorizontal: 18,
                                                                paddingVertical: 15,borderRadius:30,marginLeft:10,marginTop:15}} >
                                                                <Text style={{fontSize:16,color:'#666',fontWeight:700}}>{eachItem}</Text>
                                                            </TouchableOpacity>
                                                        ))
                                                    }
                                                </View>
                                            </ScrollView>
                                            <Text style={{fontSize:20,fontWeight:700,marginLeft:10,letterSpacing:1.5}}>
                                                Rating
                                            </Text>
                                            <ScrollView 
                                                horizontal
                                                showsHorizontalScrollIndicator={false}
                                            >
                                                <View style={styles.filterContainer}>
                                                    {
                                                        ratings.map(eachItem=>(
                                                            <TouchableOpacity style={{flexDirection:'row',height:50,width:'auto',backgroundColor:'#f0f0f0',paddingHorizontal: 18,
                                                                paddingVertical: 15,borderRadius:30,marginLeft:10,marginTop:15,alignItems:'center'}} >
                                                                <Text style={{fontSize:16,color:'#666',fontWeight:700,marginRight:5}}>{eachItem.title}</Text>
                                                                <Icon name="star" color={"#e8a507"} size={20}/>
                                                            </TouchableOpacity>
                                                        ))
                                                    }
                                                </View>
                                            </ScrollView>
                                            <Text style={{fontSize:20,fontWeight:700,marginLeft:10,letterSpacing:1.5}}>
                                                Price
                                            </Text>
                                            <View style={styles.sliderContainer}>
                                                <MultiSlider
                                                    values={[priceRange[0], priceRange[1]]}
                                                    sliderLength={300}
                                                    min={0}
                                                    max={50}
                                                    step={1}
                                                    onValuesChange={(values) => setPriceRange(values)}
                                                    allowOverlap={false}
                                                    snapped
                                                    selectedStyle={styles.selectedTrack}
                                                    trackStyle={styles.track}
                                                    customMarker={(props) => (
                                                        <View style={styles.customMarker}>
                                                            <FontAwesome6 name="location-pin" size={20} style={{marginBottom:0,marginLeft:0,color:'#b3aea3'}}/>
                                                            <Text style={styles.markerLabel}>${props.currentValue}</Text>
                                                        </View>
                                                    )}
                                                />
                                            </View>
                                            <TouchableOpacity style={{width:'100%',height:60,backgroundColor:'#1c1b1a',alignItems:'center',marginTop:40,borderRadius:30,justifyContent:'center',marginBottom:20}}>
                                                <Text style={{color:'white',fontSize:20,fontWeight:700}}>Apply</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </Modal>
                                    </View>
                                    <TouchableOpacity style={{height:'auto',width:'auto',backgroundColor:'#f5f5f5',paddingHorizontal: 18,
                                        paddingVertical: 15,borderRadius:30,marginLeft:10,marginTop:-6}} onPress={()=>{toggleMode()}}>
                                        <Text style={{fontSize:16,color:'#666',fontWeight:700}}>Sort By</Text>
                                    </TouchableOpacity>
                            </View>
                                <Modal
                                    isVisible={isModelVisiable}
                                    onBackdropPress={toggleMode}
                                    backdropOpacity={0.5}
                                    animationIn="slideInUp"
                                    animationOut="slideOutDown"
                                    style={styles.modal}
                                >
                                    <View style={{backgroundColor:'#f5f5f5',height:300,borderTopLeftRadius:40,borderTopRightRadius:40,paddingLeft:20}}>
                                        <TouchableOpacity style={{marginTop:20,flexDirection:'row',alignItems:'center'}} onPress={()=>{toggleMode()}}>
                                            <Entypo name="chevron-left" size={30} />
                                            <Text style={{fontWeight:700,fontSize:21,marginLeft:10}}>Sort By</Text>
            
                                        </TouchableOpacity>
                                        <View>
                                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:10,marginTop:40,justifyContent:"space-between",paddingRight:30}}>
                                                <TouchableOpacity style={{flexDirection:'row'}}>
                                                    <FontAwesome5 name="sort-amount-up" size={20} color={"#666"}/>
                                                    <Text style={{color:"#666",fontSize:20,marginLeft:10,fontWeight:700}}>Amount</Text>
                                                </TouchableOpacity>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{color:"#666",fontSize:16,fontWeight:600,marginRight:5}}>Low To High</Text>
                                                    <Ionicons name="arrow-up" size={20} color={'#666'} style={{marginTop:-2}}/>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginLeft:10,marginTop:40,justifyContent:"space-between",paddingRight:30}}>
                                                <View style={{flexDirection:'row'}}>
                                                    <FontAwesome5 name="sort-amount-up" size={20} color={"#666"}/>
                                                    <Text style={{color:"#666",fontSize:20,marginLeft:10,fontWeight:700}}>Amount</Text>
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                    <Text style={{color:"#666",fontSize:16,fontWeight:600,marginRight:5}}>High To Low</Text>
                                                    <Ionicons name="arrow-down" size={20} color={'#666'} style={{marginTop:-2}}/>
                                                </View>
                                            </TouchableOpacity>
                                            
                                        </View>
                                        <TouchableOpacity style={{width:'40%',height:50,backgroundColor:'#1c1b1a',alignItems:'center',marginLeft:'28%',marginTop:40,borderRadius:30,justifyContent:'center'}}>
                                            <Text style={{color:'white',fontSize:20,fontWeight:700}}>Done</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Modal>
          <View style={{marginTop:100,justifyContent:'center',alignItems:'center'}}>
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShPnoj6SVT9KMX6AeiZFjan30N32Qowwp5bw&s',height:350,width:350}} />
                <Text style={{textAlign:'center'}}>
                    Your Order List Is Empty
                </Text>
          </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'gray',
        
      },
      headerContainer: {
        width: 'auto',
        backgroundColor: '#ffffff',
        height:'100%',
        flexDirection: 'column',
        paddingTop: 20,
        paddingLeft:10,
        paddingRight:10
      },
      cartIcon:{
        height:300,
        width:300
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom:10,
        width:'75%'
    },
    searchIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    filterIcon: {
        marginLeft: 10,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    filterButton: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginRight:22,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
    },
    filterButtonActive: {
        backgroundColor: '#007AFF',
    },
    filterText: {
        color: '#666',
        fontSize: 14,
    },
    filterTextActive: {
        color: '#fff',
        fontWeight: 'bold',
    },
    listContainer: {
        padding: 10,
    },
    card: {
        flex: 1,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 15,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cardImage: {
        width: '100%',
        height: 150,
    },
    cardContent: {
        padding: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 5,
    },
    cardPrice: {
        fontSize: 14,
        color: '#007AFF',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        marginLeft: 5,
        color: '#666',
        fontSize: 14,
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    FilterModal:{
        justifyContent:'flex-end',
        margin:0
    },
    sliderContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop:20,
    
    },
    selectedTrack: {
        backgroundColor: '#3d3c3a', 
        height: 10,
       
    },
    track: {
        backgroundColor: '#b3b2b0', 
        height: 10,
        borderRadius: 10,
    },
    customMarker: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    markerLabel: {
        marginTop: 20,
        fontSize: 19,
        color: '#333',
    },
})