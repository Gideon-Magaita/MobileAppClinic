import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function EducationItem({id, title, file, message,date}){
    const navigation = useNavigation()

    return (
      <View>
       <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate("Education",{id:id,title,file,message,date})}>
          <View style={styles.cardContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <Image source={{ uri:file }} style={styles.image} />
          <Text>{date}</Text>

          </View>
          
       </TouchableOpacity>
       </View>
    ) ;
}

const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
        backgroundColor:'white',
        borderWidth: 1,
        borderColor:'#c5c5c5',
        borderRadius: 10,
        marginVertical:5,
        padding:30,
    },
    cardContent: {
        padding: 16,
      },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      description: {
        fontSize: 16,
        color: '#555',
      },
      image: {
        width:220, 
        height:200, 
        resizeMode: 'cover',
        marginBottom: 8,
        borderRadius:10,
      },
      
})