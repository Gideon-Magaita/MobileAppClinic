import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ImmuneRecord() {
  const [immunityData, setImmunityData] = useState([]);

  useEffect(() => {
    fetchImmunityData();
  }, []);

  const fetchImmunityData = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await fetch('http://192.168.100.102:8000/vaccine_list', {
        headers: {
          'Authorization': `Token ${token}`,
        },
      });
      const data = await response.json();
      setImmunityData(data);
    } catch (error) {
      console.error('Error fetching immunity data:', error);
    }
  };

  const renderRecord = ({ item }) => (
    <View style={styles.record}>
      <View style={styles.column}>
        <Text style={styles.label}>Hospital Name:</Text>
        <Text style={styles.text}>{item.hospital_name}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Child's Name:</Text>
        <Text style={styles.text}>{item.childs_name}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Vaccine Name:</Text>
        <Text style={styles.text}>{item.vaccine_name}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Vaccine Date:</Text>
        <Text style={styles.text}>{item.vaccine_date}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Return Date:</Text>
        <Text style={styles.text}>{item.return_date}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Comment:</Text>
        <Text style={styles.text}>{item.comment}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Vaccine Details</Text>
      <FlatList
        data={immunityData}
        renderItem={renderRecord}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
    marginTop: 5,
    backgroundColor: '#FFFF',
    padding: 25,
    justifyContent: 'space-around',
    borderRadius: 5,
    borderColor: '#6C63FF',
    borderWidth: 1,
    color: '#6C63FF',
    textAlign: 'center',
  },
  record: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#555',
  },
  text: {
    marginBottom: 10,
    color: '#333',
  },
});
