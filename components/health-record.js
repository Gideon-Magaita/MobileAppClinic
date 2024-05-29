import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HealthRecord() {
    const [healthData, setHealthData] = useState([]);

    useEffect(() => {
        fetchHealthData();
    }, []);

    const fetchHealthData = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            const response = await fetch('http://192.168.100.102:8000/health_list', {
                headers: {
                    'Authorization': `Token ${token}`,
                },
            });
            const data = await response.json();
            setHealthData(data);
        } catch (error) {
            console.error('Error fetching health data:', error);
        }
    };

    const renderRecord = ({ item }) => (
        <View style={styles.record}>
            <View style={styles.column}>
                <Text style={styles.label}>Full Name:</Text>
                <Text style={styles.text}>{item.full_name}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Mother's Weight:</Text>
                <Text style={styles.text}>{item.mothers_weight}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Pregnant Status:</Text>
                <Text style={styles.text}>{item.pregnant_status}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Pregnant Duration:</Text>
                <Text style={styles.text}>{item.pregnant_duration}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Blood Pressure:</Text>
                <Text style={styles.text}>{item.blood_preasure}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Child Position:</Text>
                <Text style={styles.text}>{item.child_position}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Other:</Text>
                <Text style={styles.text}>{item.other}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Health Details</Text>
            <FlatList
                data={healthData}
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
        fontSize:24,
        marginBottom:10,
        marginTop:5,
        backgroundColor:'#FFFF',
        padding:25,
        justifyContent: 'space-around',
        borderRadius:5,
        borderColor:'#6C63FF',
        borderWidth:1,
        color:'#6C63FF',
        textAlign: 'center',
    },
    record: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
        flexDirection: 'row', // Arrange items horizontally
        flexWrap: 'wrap', // Allow items to wrap to the next row
        justifyContent: 'space-between', // Space items evenly
    },
    column: {
        width: '48%', // Two columns with a small gap in between
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
