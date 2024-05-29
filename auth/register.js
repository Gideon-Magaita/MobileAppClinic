import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, TextInput, Alert } from 'react-native';

export default function Register({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://192.168.100.102:8000/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Registration successful
        // Perform any action required after successful registration
        // For example, navigate to the login screen
        navigation.navigate('Login'); // Replace 'Login' with the name of your login page
      } else {
        // Registration failed
        // Display an error message to the user
        Alert.alert('Registration Failed', 'Failed to register. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogin = () => {
    // Navigate to the login page
    navigation.navigate('Login'); // Replace 'Login' with the name of your login page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginTitle}>
        User Registration
      </Text>
      <Image style={styles.image} source={require('../assets/images/doc.png')} />
      <TextInput
        style={styles.containerText}
        placeholder='Enter username'
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.containerText}
        placeholder='Enter password'
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.loginLinkContainer}>
        <Text style={styles.loginLinkText}>Already have an account?</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginLink}>Login here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText: {
    marginTop: 25,
    width: 300,
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: '#E0DFDF',
  },
  button: {
    marginTop: 25,
    width: 300,
    height: 60,
    borderRadius: 5,
    backgroundColor: '#6C63FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6C63FF',
  },
  loginText: {
    color: '#ffffff',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: '#6C63FF',
    borderWidth: 2,
  },
  loginLinkContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginLinkText: {
    marginRight: 5,
  },
  loginLink: {
    color: '#6C63FF',
    textDecorationLine: 'underline',
  },
});
