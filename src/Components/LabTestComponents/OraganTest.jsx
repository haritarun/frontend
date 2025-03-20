import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const data = [
    { id: 1, title: 'Lungs', imageUrl: 'https://img.freepik.com/free-vector/lung-human-anatomy-biology-organ-body-system-health-care-medical-hand-drawn-cartoon-art-illustration_56104-958.jpg' },
    { id: 2, title: 'Heart', imageUrl: 'https://images.fineartamerica.com/images-medium-large-5/conceptual-image-of-human-heart-stocktrek-images.jpg' },
    { id: 3, title: 'Liver', imageUrl: 'https://t3.ftcdn.net/jpg/01/13/20/16/360_F_113201617_yopipdet9TeUj6iVOLZOzMicu7BJzo9o.jpg' },
    { id: 4, title: 'Kidney', imageUrl: 'https://www.ayushmanhhs.in/wp-content/uploads/2021/04/kidney.jpg' },
    { id: 5, title: 'Brain', imageUrl: 'https://today.ucsd.edu/news_uploads/_social/milad-fakurian-unsplash-1200x628.jpg' },
    { id: 6, title: 'Stomach', imageUrl: 'https://img.freepik.com/premium-photo/human-stomach-anatomy-internal-organ-3d-rendering_476612-20264.jpg' },
    { id: 7, title: 'Pancreas', imageUrl: 'https://arizonapremiersurgery.com/wp-content/uploads/2023/10/Pancreas.jpg' },
    { id: 8, title: 'Spleen', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdo_V9f4IYk-vNnf4ft4mcn-xJpOnUDAnEhA&s' },
    { id: 9, title: 'Gallbladder', imageUrl: 'https://img.freepik.com/free-vector/gallbladder-human-anatomy-biology-organ-body-system-health-care-medical-concept-hand-drawn-cartoon-art-illustration_56104-1014.jpg' },
    { id: 10, title: 'Intestines', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdo_V9f4IYk-vNnf4ft4mcn-xJpOnUDAnEhA&s' },
    { id: 11, title: 'Bladder', imageUrl: 'https://www.ayushmanhhs.in/wp-content/uploads/2021/04/kidney.jpg' },
    { id: 12, title: 'Thyroid', imageUrl: 'https://t3.ftcdn.net/jpg/01/13/20/16/360_F_113201617_yopipdet9TeUj6iVOLZOzMicu7BJzo9o.jpg' },
    { id: 13, title: 'Esophagus', imageUrl: 'https://images.fineartamerica.com/images-medium-large-5/conceptual-image-of-human-heart-stocktrek-images.jpg' },
    
];

const OraganTest = () => {
    const [showAll, setShowAll] = useState(false); 
    const initialDisplayCount = 6; 

    const displayedData = showAll ? data : data.slice(0, initialDisplayCount);

    return (
        <View style={styles.offerContainer}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.sectionTitle}>Tests For Organs</Text>
                <TouchableOpacity onPress={() => setShowAll(!showAll)}>
                    <Text style={styles.viewToggleText}>
                        {showAll ? 'View Less' : 'View All'}
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.itemsContainer}>
                {displayedData.map(eachItem => (
                    <View key={eachItem.id} style={styles.itemWrapper}>
                        <Image
                            source={{ uri: eachItem.imageUrl }}
                            style={styles.itemImage}
                        />
                        <Text style={styles.itemTitle}>{eachItem.title}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default OraganTest;

const styles = StyleSheet.create({
    offerContainer: {
        backgroundColor: '#ffffff',
        height: 'auto',
        marginHorizontal: 20,
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 17,
        paddingTop: 20,
        paddingBottom: 20,
    },
    sectionTitle: {
        color: '#456b52',
        fontSize: 18,
        fontWeight: '700',
    },
    viewToggleText: {
        color: '#456b52',
        fontSize: 15,
        fontWeight: '600',
    },
    itemsContainer: {
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
    },
    itemWrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '28%', 
        marginBottom: 15,
    },
    itemImage: {
        height: 100,
        width: 100,
        borderRadius: 20,
        marginTop: 10,
    },
    itemTitle: {
        marginTop: 5,
        fontSize: 14,
        color: '#456b52',
        textAlign: 'center',
    },
});