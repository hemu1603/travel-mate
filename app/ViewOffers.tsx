import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';

const ViewOffers = () => {
  // Example offers data
  const offers = [
    {
      id: 1,
      title: 'Beach Vacation Package',
      description: 'Enjoy a relaxing week at the beach with all-inclusive amenities.',
      image: 'https://www.bookingnear.com/storage/package-gallery/large_1-goa-tour-package.jpeg',
    },
    {
      id: 2,
      title: 'Mountain Adventure',
      description: 'Experience the thrill of mountain hiking and camping.',
      image: 'https://alpenglowexpeditions.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-07-25-at-6.19.39-AM.jpeg',
    },
    {
      id: 3,
      title: 'City Tour',
      description: 'Explore the best sights and attractions of the city in a guided tour.',
      image: 'https://static.toiimg.com/img/110433185/Master.jpg',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Exclusive Offers</Text>

      {offers.map((offer) => (
        <View key={offer.id} style={styles.offerCard}>
          <Image source={{ uri: offer.image }} style={styles.offerImage} />
          <Text style={styles.offerTitle}>{offer.title}</Text>
          <Text style={styles.offerDescription}>{offer.description}</Text>
          <Button
            title="Learn More"
            onPress={() => alert(`Learn more about ${offer.title}`)}
            color="#6200ea"
          />
        </View>
      ))}
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
    marginBottom: 20,
    color: '#1e90ff', // Blue color for the title
    textAlign: 'center',
  },
  offerCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    padding: 15,
    marginBottom: 20,
  },
  offerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  offerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  offerDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
});

export default ViewOffers;
