import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './components/drawer';


const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
    {/* <HomeStack /> */}
    <MyDrawer />
    <StatusBar style="light"/>
  </NavigationContainer>
  );
};

export default App;
