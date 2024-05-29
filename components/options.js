import { Ionicons } from "@expo/vector-icons";
import {Text} from 'react-native';


export const navOptions = (nav)=>{
    return{
        headerTintColor: '#cbd5e1',
        headerStyle:{
            backgroundColor: '#6C63FF',
        },
        headerRight:()=>(
            <Ionicons 
            name="menu"
            size={32}
            color="white"
            onPress={()=>nav.toggleDrawer()}
            />
       ),
       headerLeft:()=>(
         <Text style={{color:'yellow',fontSize:20,paddingLeft:10,fontWeight:'bold'}}>
            RHC
         </Text>
       ),
    }
         
}