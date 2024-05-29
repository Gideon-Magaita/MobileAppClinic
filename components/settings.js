import React from 'react';
import { Button, View, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { removeToken } from './storage';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await removeToken(); // Remove the token from storage
    Alert.alert('Logout', 'Logged out successfully', [
      { text: 'OK', onPress: () => navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      }) },
    ]);
  };

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingsScreen;
