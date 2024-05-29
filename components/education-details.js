import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { HeaderBackButton } from '@react-navigation/elements';

export default function EducationDetailScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  // Destructure with fallback values
  const { title = 'No title', message = 'No message', date = 'No date', file = null } = route.params || {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Education Detail',
      headerLeft: () => (
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.detail}>{title}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Descriptions</Text>
        <Text style={styles.detail}>{message}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Date Added</Text>
        <Text style={styles.detail}>{date}</Text>
      </View>

      {file && ( // Check if image exists
        <View style={styles.imageContainer}>
          <Image source={{ uri: file }} style={styles.image} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  detail: {
    fontSize: 18,
    color: '#666',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 300, 
    height: 250, 
    resizeMode: 'cover', 
    marginBottom: 8,
  },
});
