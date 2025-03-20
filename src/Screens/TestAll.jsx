import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import React, { useState, useLayoutEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const GeneralTestAll = () => {
    const navigation = useNavigation();
    
    const [isModelVisible, setModelVisible] = useState(false);
    const [isFilterModel, setFilterModel] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 150]);

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('All');

    const toggleMode = () => {
        setModelVisible(!isModelVisible);
    };

    const filterMode = () => {
        setFilterModel(!isFilterModel);
    };

    const [tests, setTests] = useState([
        { id: '1', name: 'Complete Blood Count', type: 'Blood Test', imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
        { id: '2', name: 'X-Ray Chest', type: 'Imaging Test', imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
        { id: '3', name: 'Lipid Profile', type: 'Blood Test', imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
        { id: '4', name: 'MRI Brain', type: 'Imaging Test', imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
        { id: '5', name: 'Thyroid Test', type: 'Blood Test', imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
        { id: '6', name: 'Ultrasound', type: 'Imaging Test', imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
        { id: '7', name: 'Blood Sugar', type: 'Blood Test', imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
        { id: '8', name: 'CT Scan', type: 'Imaging Test', imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    ]);

    const testTypes = ['All', 'Blood Test', 'Imaging Test', 'Urine Test'];

    const [brands] = useState([
        { id: 1, title: 'Pfizer' },
        { id: 2, title: 'Johnson' },
        { id: 3, title: 'Novartis' },
        { id: 4, title: 'Roche' },
        { id: 5, title: 'Bayer' },
        { id: 6, title: 'Abbott' },
        { id: 7, title: 'AstraZeneca' },
        { id: 8, title: 'Sanofi' },
        { id: 9, title: 'Merck' },
    ]);

    const ratings = [
        { id: '1', title: '1', value: 1 },
        { id: '2', title: '2', value: 2 },
        { id: '3', title: '3', value: 3 },
        { id: '4', title: '4', value: 4 },
        { id: '5', title: '5', value: 5 },
    ];

    useLayoutEffect(() => {
        navigation.getParent()?.setOptions({
            tabBarStyle: { display: 'none' },
        });
    }, [navigation]);

    const filteredTests = tests.filter(test =>
        test.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedFilter === 'All' || test.type === selectedFilter)
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            <Image
                source={{ uri: item.imageUrl }}
                style={styles.cardImage}
                resizeMode="cover"
            />
            <View style={styles.overlay}>
                <Text style={styles.cardTitle}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.headerRow}>
                    <Icon
                        name="arrowleft"
                        size={24}
                        color={'#333'}
                        onPress={() => navigation.navigate("LabTest")}
                    />
                    <Text style={styles.headerTitle}>Medical Tests</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.searchContainer}>
                        <MaterialIcons name="search" size={20} color="#888" style={styles.searchIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Search tests..."
                            placeholderTextColor="#888"
                            value={searchQuery}
                            onChangeText={(val) => setSearchQuery(val)}
                        />
                        <TouchableOpacity onPress={() => filterMode()}>
                            <MaterialIcons name="filter-list" size={20} color="#888" style={styles.filterIcon} />
                        </TouchableOpacity>
                        <Modal
                            isVisible={isFilterModel}
                            backdropOpacity={0.5}
                            onBackdropPress={filterMode}
                            animationIn="slideInUp"
                            animationOut="slideOutDown"
                            style={styles.FilterModal}
                        >
                            <View style={styles.filterModalContent}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={filterMode}>
                                        <Entypo name="chevron-left" size={30} />
                                        <Text style={styles.filterModalTitle}>Filter</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={styles.resetText}>Reset</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.filterLabel}>Test Type</Text>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                    <View style={styles.filterContainer}>
                                        {testTypes.map(type => (
                                            <TouchableOpacity
                                                key={type}
                                                style={[styles.filterButtonModal, selectedFilter === type && styles.filterButtonModalActive]}
                                                onPress={() => setSelectedFilter(type)}
                                            >
                                                <Text style={[styles.filterTextModal, selectedFilter === type && styles.filterTextModalActive]}>
                                                    {type}
                                                </Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </ScrollView>
                                <Text style={styles.filterLabel}>Brand</Text>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                    <View style={styles.filterContainer}>
                                        {brands.map(brand => (
                                            <TouchableOpacity key={brand.id} style={styles.filterButtonModal}>
                                                <Text style={styles.filterTextModal}>{brand.title}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </ScrollView>
                                <Text style={styles.filterLabel}>Rating</Text>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                    <View style={styles.filterContainer}>
                                        {ratings.map(rating => (
                                            <TouchableOpacity key={rating.id} style={styles.filterButtonModal}>
                                                <Text style={styles.filterTextModal}>
                                                    {rating.title} <Icon name="star" color="#e8a507" size={16} />
                                                </Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </ScrollView>
                                <Text style={styles.filterLabel}>Price</Text>
                                <View style={styles.sliderContainer}>
                                    <MultiSlider
                                        values={[priceRange[0], priceRange[1]]}
                                        sliderLength={300}
                                        min={0}
                                        max={150}
                                        step={1}
                                        onValuesChange={(values) => setPriceRange(values)}
                                        allowOverlap={false}
                                        snapped
                                        selectedStyle={styles.selectedTrack}
                                        trackStyle={styles.track}
                                        customMarker={(props) => (
                                            <View style={styles.customMarker}>
                                                <FontAwesome6 name="location-pin" size={20} style={{ color: '#b3aea3' }} />
                                                <Text style={styles.markerLabel}>${props.currentValue}</Text>
                                            </View>
                                        )}
                                    />
                                </View>
                                <TouchableOpacity style={styles.applyButton} onPress={filterMode}>
                                    <Text style={styles.applyButtonText}>Apply</Text>
                                </TouchableOpacity>
                            </View>
                        </Modal>
                    </View>
                    <TouchableOpacity
                        style={styles.sortButton}
                        onPress={toggleMode}
                    >
                        <Text style={styles.sortButtonText}>Sort By</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    isVisible={isModelVisible}
                    onBackdropPress={toggleMode}
                    backdropOpacity={0.5}
                    animationIn="slideInUp"
                    animationOut="slideOutDown"
                    style={styles.modal}
                >
                    <View style={styles.sortModalContent}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={toggleMode}>
                            <Entypo name="chevron-left" size={30} />
                            <Text style={styles.sortModalTitle}>Sort By</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sortOption}>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome5 name="sort-amount-up" size={20} color="#666" />
                                <Text style={styles.sortText}>Amount</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.sortSubText}>Low To High</Text>
                                <Ionicons name="arrow-up" size={20} color="#666" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sortOption}>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome5 name="sort-amount-up" size={20} color="#666" />
                                <Text style={styles.sortText}>Amount</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.sortSubText}>High To Low</Text>
                                <Ionicons name="arrow-down" size={20} color="#666" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.doneButton} onPress={toggleMode}>
                            <Text style={styles.doneButtonText}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.filterContainer}>
                        {testTypes.map(type => (
                            <TouchableOpacity
                                key={type}
                                style={[styles.filterButton, selectedFilter === type && styles.filterButtonActive]}
                                onPress={() => setSelectedFilter(type)}
                            >
                                <Text style={[styles.filterText, selectedFilter === type && styles.filterTextActive]}>
                                    {type}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
            <FlatList
                data={filteredTests}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default GeneralTestAll;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F6FA',
    },
    headerContainer: {
        backgroundColor: '#ffffff',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 25,
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 10,
        width: '75%',
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
    sortButton: {
        height: 'auto',
        width: 'auto',
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 18,
        paddingVertical: 15,
        borderRadius: 30,
        marginLeft: 10,
        marginTop: -6,
    },
    sortButtonText: {
        fontSize: 16,
        color: '#666',
        fontWeight: '700',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    filterButton: {
        paddingVertical: 8,
        paddingHorizontal: 15,
        marginRight: 22,
        borderRadius: 20,
        
        borderWidth: 1,
        borderColor: 'gray',
    },
    filterButtonActive: {
        backgroundColor: '#FF6B6B',
        borderColor: '#FF6B6B',
    },
    filterText: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '600',
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
        margin: 8,
        borderRadius: 15,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        height: 180,
    },
    cardImage: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    FilterModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    filterModalContent: {
        height: 650,
        backgroundColor: '#f5f5f5',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingLeft: 20,
        paddingTop: 20,
        paddingRight: 20,
    },
    filterModalTitle: {
        fontWeight: '700',
        fontSize: 25,
        marginLeft: 10,
    },
    resetText: {
        color: '#666',
        fontSize: 17,
        marginRight: 10,
        marginTop: 10,
        fontWeight: '700',
    },
    filterLabel: {
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 10,
        letterSpacing: 1,
        marginTop: 30,
    },
    filterButtonModal: {
        height: 50,
        width: 'auto',
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 18,
        paddingVertical: 15,
        borderRadius: 30,
        marginLeft: 10,
        marginTop: 15,
    },
    filterButtonModalActive: {
        backgroundColor: '#FF6B6B',
    },
    filterTextModal: {
        fontSize: 16,
        color: '#666',
        fontWeight: '700',
    },
    filterTextModalActive: {
        color: '#fff',
    },
    sliderContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    selectedTrack: {
        backgroundColor: '#FF6B6B',
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
        marginTop: 5,
        fontSize: 16,
        color: '#333',
    },
    applyButton: {
        width: '100%',
        height: 60,
        backgroundColor: '#1c1b1a',
        alignItems: 'center',
        marginTop: 40,
        borderRadius: 30,
        justifyContent: 'center',
        marginBottom: 20,
    },
    applyButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
    sortModalContent: {
        backgroundColor: '#f5f5f5',
        height: 300,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingLeft: 20,
        paddingTop: 20,
    },
    sortModalTitle: {
        fontWeight: '700',
        fontSize: 21,
        marginLeft: 10,
    },
    sortOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 40,
        justifyContent: 'space-between',
        paddingRight: 30,
    },
    sortText: {
        color: '#666',
        fontSize: 20,
        marginLeft: 10,
        fontWeight: '700',
    },
    sortSubText: {
        color: '#666',
        fontSize: 16,
        fontWeight: '600',
        marginRight: 5,
    },
    doneButton: {
        width: '40%',
        height: 50,
        backgroundColor: '#1c1b1a',
        alignItems: 'center',
        marginLeft: '28%',
        marginTop: 40,
        borderRadius: 30,
        justifyContent: 'center',
    },
    doneButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
});