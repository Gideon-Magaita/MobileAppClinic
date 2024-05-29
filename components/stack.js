import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Login from '../auth/login';
import Register from '../auth/register';
import OnboardingScreen from './onboarding';
import {navOptions} from './options';
import { HomeTabs } from './tabs';
import EducationDetailScreen from './education-details';
import HealthRecord from './health-record';
import ImmuneRecord from './immune-record';
import ClinicCard from './clinic-card';
import EducationItem from'./health-record';
import SettingsScreen from './settings';



const Stack = createStackNavigator();

export default function HomeStack() {
  const navigation = useNavigation()
  return (
    <Stack.Navigator
    initialRouteName="Onboarding"
    screenOptions={()=>navOptions(navigation)}
    >
      <Stack.Screen name="CLINIC KIGANJANI" component={HomeTabs} 
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontSize: 20, 
            fontWeight: 'bold',
            color: 'white',
          }, 
      }}
      />
    <Stack.Screen name="Onboarding" component={OnboardingScreen}
     options={{ headerShown: false }}
     />
    <Stack.Screen name="Education" component={EducationDetailScreen} />
    <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
    <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    <Stack.Screen name="HealthRecord" component={HealthRecord} />
    <Stack.Screen name="ImmuneRecord" component={ImmuneRecord} />
    <Stack.Screen name="ClinicCard" component={ClinicCard} />
    <Stack.Screen name="EducationItem" component={EducationItem}/>
    <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}