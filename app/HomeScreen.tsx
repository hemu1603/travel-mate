import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type HomeScreenNavigationProp = NativeStackNavigationProp<any, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to TravelMate!</Text>
        <Text style={styles.subtitle}>
          Discover your next adventure and explore amazing destinations.
        </Text>
      </View>

      {/* Image Section */}
      <Image
        source={{ uri: 'https://w7.pngwing.com/pngs/823/324/png-transparent-package-tour-travel-agent-flight-tour-operator-travel-city-computer-wallpaper-world.png' }}
        style={styles.image}
      />

      {/* Explore Section */}
      <View style={styles.exploreSection}>
        <Text style={styles.exploreTitle}>Explore Top Destinations</Text>
        <View style={styles.destinationContainer}>
          {/* Add destination images or cards */}
          <Image
            source={{ uri: 'https://www.india.com/wp-content/uploads/2024/07/Jaipur-For-Honeymoon.jpg' }}
            style={styles.destinationImage}
          />
          <Image
            source={{ uri: 'https://i0.wp.com/onedayitinerary.com/wp-content/uploads/2020/02/One-day-in-Manali-Itinerary-India.jpg' }}
            style={styles.destinationImage}
          />
          <Image
            source={{ uri: 'https://i.ytimg.com/vi/SD6MbKbgKd0/maxresdefault.jpg' }}
            style={styles.destinationImage}
          />
        </View>
      </View>

      {/* Button Section */}
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Plan Your Trip"
          onPress={() => navigation.navigate('PlanTrip')}
          buttonStyle={styles.button}
          textStyle={styles.buttonText}
        />
        <CustomButton
          title="View Offers"
          onPress={() => navigation.navigate('Offers')}
          buttonStyle={[styles.button, styles.detailsButton]}
          textStyle={styles.buttonText}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  exploreSection: {
    marginVertical: 20,
    alignItems: 'center',
  },
  exploreTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  destinationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  destinationImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#6200ea',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  detailsButton: {
    backgroundColor: '#03dac6',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default HomeScreen;
