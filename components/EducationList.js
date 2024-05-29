import {View,Text,StyleSheet,FlatList,RefreshControl} from 'react-native';
// import DUMMY_DATA from '../../data/dummy';
import EducationItem from './EducationItem';

const EducationList = ({data, onRefresh}) =>{
    //  console.log('Received data:', data);

    const renderItem=({item}) => {
        return <EducationItem id={item.id} title={item.title} file={item.file} message={item.message} date={item.date}/>
    }
    
    return (
       <View>
        <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        refreshControl={
            <RefreshControl 
            refreshing={false}
            onRefresh={onRefresh}
            />
        }
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        />
       </View>
    );
}

export default EducationList;