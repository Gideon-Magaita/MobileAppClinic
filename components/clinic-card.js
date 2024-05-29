import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ClinicRecord() {
    const [clinicData, setClinicData] = useState([]);

    useEffect(() => {
        fetchClinicData();
    }, []);

    const fetchClinicData = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            const response = await fetch('http://192.168.100.102:8000/clinic_list', {
                headers: {
                    'Authorization': `Token ${token}`,
                },
            });
            const data = await response.json();
            setClinicData(data);
        } catch (error) {
            console.error('Error fetching clinic data:', error);
        }
    };

    const renderRecord = ({ item }) => (
        <View style={styles.record}>
            <View style={styles.column}>
                <Text style={styles.label}>Clinic Name:</Text>
                <Text style={styles.text}>{item.jina_la_clinic}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Mother's Name:</Text>
                <Text style={styles.text}>{item.jina_la_mama}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Mother's Age:</Text>
                <Text style={styles.text}>{item.umri_wa_mama}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Mother's Education:</Text>
                <Text style={styles.text}>{item.elimu_ya_mama}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Mother's Occupation:</Text>
                <Text style={styles.text}>{item.kazi_ya_mama}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Mother's Height:</Text>
                <Text style={styles.text}>{item.urefu_wa_mama}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Number of Pregnancies:</Text>
                <Text style={styles.text}>{item.mimba_ya_ngapi}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Number of Births:</Text>
                <Text style={styles.text}>{item.amezaa_mara_ngapi}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Number of Living Children:</Text>
                <Text style={styles.text}>{item.watoto_walio_hai}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Father's Name:</Text>
                <Text style={styles.text}>{item.jina_la_mume}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Father's Age:</Text>
                <Text style={styles.text}>{item.umri_wa_mume}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Father's Education:</Text>
                <Text style={styles.text}>{item.elimu_ya_mume}</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>Father's Occupation:</Text>
                <Text style={styles.text}>{item.kazi_ya_mume}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Clinic Card Details</Text>
            <FlatList
                data={clinicData}
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
