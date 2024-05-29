import React,{useEffect,useState} from 'react';
import {StyleSheet,View,Text,Button} from 'react-native';
import EducationList from './EducationList';


export default function HomeScreen(){
    
    // const navigation = useNavigation()

    const [data,setData] = useState([])
    const [refresh,setRefresh] = useState(false)

    const handleRefresh = () => {
        console.log('refreshing');
        setRefresh((prevState) => !prevState);
    };

    useEffect(()=>{
        fetchData()
    },[refresh])


    const fetchData = async()=>{
        const response = await fetch('http://192.168.100.102:8000/education')
        const data = await response.json()
        setData(data)
    }
    
   
    return(
        <View style={styles.screen}>
            <Text style={styles.textStyle}>ELIMU YA AFYA YA MAMA NA MTOTO</Text>
            <EducationList data={data} onRefresh={handleRefresh}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        padding:20,
    },
    textStyle:{
     alignItems: 'center',
     fontWeight: 'bold',
     fontSize:15,
     marginBottom:10,
     marginTop:5,
     backgroundColor:'#FFFF',
     padding:25,
     justifyContent: 'space-around',
     borderRadius:5,
     borderColor:'#6C63FF',
     borderWidth:1,
     color:'#6C63FF',
    }
})