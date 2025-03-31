import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Data = [
    {
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2vQE0nfrtXk99mKE2r1KS0XFgJk8xEvo7ORjnbuO1PUnBOc2L3qJ3eqYlBCawhk-ja7g&usqp=CAU',
      title: 'Complete Blood Count (CBC)',
      description: 'Measures red/white blood cells, hemoglobin, and platelets'
    },
    {
      imageUrl: 'https://img.freepik.com/premium-photo/lipid-profile-medical-check-up-test-tube-with-biological-sample_581734-1475.jpg',
      title: 'Lipid Profile',
      description: 'Cholesterol and triglyceride levels assessment'
    },
    {
      imageUrl: 'https://www.lalpathlabs.com/blog/wp-content/uploads/2016/03/thyroid-test.jpg',
      title: 'Thyroid Function Test',
      description: 'TSH, T3, and T4 hormone levels evaluation'
    },
    {
      imageUrl: 'https://www.diagnopein.com/img/TestImages/pathooooooooo%20web1.jpg',
      title: 'Liver Function Test',
      description: 'ALT, AST, bilirubin, and protein levels check'
    },
    {
      imageUrl: 'https://udaipurtimes.com/static/c1e/client/74416/uploaded/916317971acb1bd77f5adbb70ae19b84.jpg',
      title: 'Kidney Function Test',
      description: 'BUN, creatinine, and GFR measurement'
    },
    {
      imageUrl: 'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2018/10/shutterstock_271701911.jpg',
      title: 'HbA1c Test',
      description: '3-month average blood sugar level analysis'
    },
    {
      imageUrl: 'https://media.sciencephoto.com/f0/36/75/12/f0367512-800px-wm.jpg',
      title: 'Vitamin D Test',
      description: '25-hydroxy vitamin D level measurement'
    }
  ];

const GeneralTest = ({item}) => {
    const navigation = useNavigation()
  return (
    <View style={styles.offerContainer}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,marginHorizontal:10}}>
                <Text style={{fontSize:17,fontWeight:700,color:'#456b52'}}>General Test</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Doctors',{screen:'GeneralTestAll',params:{previousScreen:item}})}}>
                    <Text style={{fontSize:14,color:'#2c6d68',fontWeight:500}}>View All</Text>
                </TouchableOpacity>
            </View>

        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>
            
    {
        Data.map((eachItem, index) => (
            <View key={index} style={{ marginTop: 29, position: 'relative' }}>
                
                <Image
                    source={{ uri: eachItem.imageUrl }}
                    style={{ height: 200, width: 120, borderRadius: 20 }}
                />
                
                <Text style={{ position: 'absolute', top: 10, left: 10, color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                    {eachItem.title}
                </Text>
            </View>
        ))
    }
</View>
    </View>
  )
}

export default GeneralTest

const styles = StyleSheet.create({
    offerContainer:{
        backgroundColor:'#ffffff',
        height:'auto',
        marginHorizontal:20,
        borderRadius:10,
        marginTop:20,
       
      },
})