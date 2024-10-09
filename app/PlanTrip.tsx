import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';

const PlanTrip = () => {
  // State for user input
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travelers, setTravelers] = useState('');

  // Function to handle trip planning
  const handlePlanTrip = () => {
    // Logic for planning the trip (e.g., save data, navigate, etc.)
    console.log('Trip planned:', {
      destination,
      travelDate,
      travelers,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Plan Your Trip</Text>
      <Text style={styles.description}>
        Fill in the details below to plan your next adventure!
      </Text>

      {/* Destination Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your destination"
        value={destination}
        onChangeText={setDestination}
      />

      {/* Travel Date Input */}
      <TextInput
        style={styles.input}
        placeholder="Travel Date (YYYY-MM-DD)"
        value={travelDate}
        onChangeText={setTravelDate}
      />

      {/* Travelers Input */}
      <TextInput
        style={styles.input}
        placeholder="Number of Travelers"
        value={travelers}
        onChangeText={setTravelers}
        keyboardType="numeric"
      />

      {/* Plan Trip Button */}
      <Button title="Plan My Trip" onPress={handlePlanTrip} color="#6200ea" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Light gray background
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1e90ff', // Blue color for the title
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#333', // Dark gray for description
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff', // White background for inputs
  },
});

export default PlanTrip;
