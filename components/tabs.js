import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import { Ionicons } from "@expo/vector-icons";
import HealthRecord from './health-record'; 
import ImmuneRecord from './immune-record';
import ClinicCard from './clinic-card';
import { Text } from 'react-native'; 



const Tab = createBottomTabNavigator();

export const HomeTabs =()=> {
  return (
    <Tab.Navigator
    screenOptions={({route}) =>({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle:{
            backgroundColor: 'black',
            height:75,
        },
        tabBarActiveTintColor: 'yellow',
        tabBarInactiveTintColor: 'white',
        tabBarIcon:({focused,color,size})=>{
            let iconName;
            let label;
            if(route.name==='HomeTabs'){
                iconName = focused? 'home': 'home-outline'
                label = 'Education';
            }
            else if(route.name==='Health Record'){
                iconName = focused? 'person': 'person-outline'
                label = 'Health';
            }
            else if(route.name==='Immune'){
              iconName = focused? 'medkit': 'medkit-outline'
              label = 'Immune';
          }
          else if(route.name==='Card'){
            iconName = focused? 'book': 'book-outline'
            label = 'Card';
        }
        return (
          <>
            <Ionicons name={iconName} size={focused ? 35 : size} color={color} />
            <Text style={{ color: focused ? 'yellow' : 'white' }}>{label}</Text>
          </>
        );
        }
    }) }
    >
      <Tab.Screen 
      name="HomeTabs" 
      component={HomeScreen}
      options={{
        title: 'Home'
      }} 
      />
      <Tab.Screen name="Health Record" component={HealthRecord}/>
      <Tab.Screen name="Immune" component={ImmuneRecord} />
      <Tab.Screen name="Card" component={ClinicCard} />

    </Tab.Navigator>
  );
}