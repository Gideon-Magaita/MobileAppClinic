import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://192.168.100.102:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token to AsyncStorage
        await AsyncStorage.setItem('userToken', data.token);

        // Navigate to the HomeTabs
        navigation.navigate('CLINIC KIGANJANI'); // Ensure this routes to the tab navigator
      } else {
        Alert.alert('Login Failed', data.non_field_errors ? data.non_field_errors[0] : 'Invalid username or password');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Login Failed', 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register'); // Replace 'Register' with the name of your register page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Logintitle}>User Login</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        <Text style={styles.loginText}>{loading ? 'Logging in...' : 'Login'}</Text>
      </TouchableOpacity>
      <View style={styles.registerLinkContainer}>
        <Text style={styles.registerLinkText}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.registerLink}>Register here</Text>
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
  Logintitle: {
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
  registerLinkContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  registerLinkText: {
    marginRight: 5,
  },
  registerLink: {
    color: '#6C63FF',
    textDecorationLine: 'underline',
  },
});
