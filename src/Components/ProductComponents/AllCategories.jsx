import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Data=[
  {
      color:'#c5d1cd',
      imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
      title:'shop'
  },
  {
    color:'#c5d1cd',
      imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
      title:'shop'
  },
  {
    color:'#c5d1cd',
      imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
      title:'shop'
  },
  {
    color:'#c5d1cd',
      imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
      title:'shop'
  },
  {
    color:'#c5d1cd',
      imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
      title:'shop'
  },
  {
    color:'#c5d1cd',
      imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
      title:'shop'
  },
  {
    color:'#c5d1cd',
      imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
      title:'shop'
  },
  {
    color:'#c5d1cd',
      imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
      title:'shop'
  },
  {
    color:'#c5d1cd',
      imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
      title:'shop'
  },
  {
    color:'#c5d1cd',
      imageUrl:'https://t4.ftcdn.net/jpg/02/81/42/77/360_F_281427785_gfahY8bX4VYCGo6jlfO8St38wS9cJQop.jpg',
      title:'shop'
  },
  
] 

const AllCategories = () => {
  return (
    <>
      <View style={styles.offerContainer}>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{color:"#456b52",fontWeight:700,fontSize:17}}>All Categories</Text>
          <TouchableOpacity >
            <Text style={{fontSize:15,fontStyle:'normal',color:'#07666d',fontWeight:600}}>View All</Text>
          </TouchableOpacity>
      </View>
      <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',flexWrap:'wrap'}}>
        {
                    Data.map(eachItem=>{
                        return(
                            <View style={{flexDirection:'column',marginTop:29}}>
                                <TouchableOpacity style={{borderRadius:20,borderWidth:2,height:110,width:110,justifyContent:'center',alignItems:'center',marginHorizontal:2,borderColor:eachItem.color}}>
                                  <Image source={{uri:eachItem.imageUrl,height:95,width:95}} style={{borderRadius:15}}/>
                                </TouchableOpacity>
                                <Text style={{marginLeft:10,marginTop:5,fontSize:15,fontWeight:600}}>{eachItem.title}</Text>
                            </View>
                        )
                    })
                }
            </View>
    </View>
    
    </>
  )
}

export default AllCategories

const styles = StyleSheet.create({
  offerContainer:{
    backgroundColor:'#edf7ef',
    height:'auto',
    marginHorizontal:20,
    borderRadius:10,
    marginTop:20,
    paddingHorizontal:17,
    paddingTop:20, 
    
},
})