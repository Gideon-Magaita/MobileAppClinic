import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './stack';
import ClinicRecord from './clinic-card';
import SettingsScreen from './settings';
import Ask from './ask';


const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="HomeStack" component={HomeStack} 
      options={{title: 'Home'}}/>

    <Drawer.Screen name="ClinicRecord" component={ClinicRecord} 
      options={{title: 'Clinic Card'}}/>

   <Drawer.Screen name="SettingsScreen" component={SettingsScreen} 
      options={{title: 'Logout'}}/>
    
    
   <Drawer.Screen name="Ask" component={Ask} 
      options={{title: 'Ask'}}/>

    </Drawer.Navigator>
  );
}