import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const PremiumDetails = ({ route, navigation }) => {
    const { data } = route.params;
    
    return (
        <ScrollView 
            contentContainerStyle={styles.scrollContainer}
            showsVerticalScrollIndicator={false}
        >
            <View style={styles.container}>
                
                <Image 
                    source={{ uri: data.imageUrl }} 
                    style={styles.image}
                    resizeMode="contain"
                />
                
                <Text style={styles.trustedText}>TRUSTED AROUND THE WORLD</Text>
                
                <View style={styles.headlineContainer}>
                    <Text style={styles.headline}>Millions trust </Text>
                    <Text style={[styles.headline, styles.highlight]}>Hospital  </Text>
                    <Text style={styles.headline}>for their online security</Text>
                </View>
                
                <Text style={styles.subheadline}>Try Premium right now</Text>
                
                <View style={styles.offerCard}>
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>MOST POPULAR</Text>
                    </View>
                    
                    <Text style={styles.offerText}>Start your 7-day free trial</Text>
                    <Text style={styles.priceText}>then {data.price}/month</Text>
                    
                    <TouchableOpacity 
                        style={styles.trialButton}
                        activeOpacity={0.9}
                    >
                        <Text style={styles.buttonText}>START 1-WEEK FREE TRIAL</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.backText}>← Go Back to Options</Text>
                    </TouchableOpacity>
                    
                    <View style={styles.guaranteeContainer}>
                        <Text style={styles.guaranteeText}>✓ 30-day money-back guarantee</Text>
                        <Text style={styles.underlineText}>No commitment. Cancel anytime.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    container: {
        padding: 25,
        alignItems: 'center',
        backgroundColor: '#fff',
        minHeight: height,
        paddingTop: 40,
    },
    image: {
        width: width * 0.8,
        height: width * 0.8,
        marginBottom: 25,
    },
    trustedText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 15,
        letterSpacing: 1.5,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    headlineContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 15,
        paddingHorizontal: 20,
    },
    headline: {
        fontSize: 26,
        fontWeight: '500',
        textAlign: 'center',
        lineHeight: 34,
        color: '#222',
    },
    highlight: {
        fontWeight: '700',
        color: '#0066FF',
    },
    subheadline: {
        fontSize: 22,
        color: '#444',
        marginBottom: 30,
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 10,
    },
    offerCard: {
        backgroundColor: '#F8F8F8',
        borderRadius: 20,
        padding: 30,
        width: '100%',
        maxWidth: 400,
        alignItems: 'center',
        marginTop: 20,
        position: 'relative',
    },
    badge: {
        position: 'absolute',
        top: -15,
        backgroundColor: '#FF6B00',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 15,
    },
    badgeText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 12,
        letterSpacing: 1,
    },
    offerText: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 8,
        color: '#333',
        marginTop: 15,
        textAlign: 'center',
    },
    priceText: {
        fontSize: 18,
        color: '#666',
        marginBottom: 30,
        textAlign: 'center',
    },
    trialButton: {
        backgroundColor: '#0066FF',
        borderRadius: 30,
        paddingVertical: 18,
        width: '100%',
        marginBottom: 25,
        shadowColor: '#0066FF',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
        letterSpacing: 0.5,
        textTransform: 'uppercase',
    },
    backButton: {
        marginBottom: 25,
        padding: 10,
    },
    backText: {
        fontSize: 16,
        color: '#0066FF',
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
    guaranteeContainer: {
        alignItems: 'center',
    },
    guaranteeText: {
        fontSize: 14,
        color: '#4CAF50',
        fontWeight: '500',
        marginBottom: 8,
    },
    underlineText: {
        fontSize: 14,
        color: '#666',
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
});

export default PremiumDetails;