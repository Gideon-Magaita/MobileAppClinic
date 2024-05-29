import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Ask() {
  return (
    <LinearGradient
      colors={['#ffafbd', '#ffc3a0']}
      style={styles.container}
    >
      <Text style={styles.title}>Ask any question</Text>
      <TextInput
        style={styles.input}
        placeholder="Type a message"
      />
      <View style={styles.buttonContainer}>
        <Button title="Send" onPress={() => {}} color="#841584"/>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    width: '80%',
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 5,
    overflow: 'hidden',
  },
});
