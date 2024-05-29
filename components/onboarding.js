import React from 'react';
import {View,Text,Button,Image,StyleSheet,TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';



const OnboardinScreen = ({navigation})=>{

    //customize button components
    const Done = ({...props}) =>(
    <TouchableOpacity
     style={{marginHorizontal:10}}
     {...props}
     >
    <Text style={{marginRight:25,fontSize:18}}>Done</Text>
    </TouchableOpacity>    
    )


    const Skip = ({...props}) =>(
        <TouchableOpacity
         style={{marginHorizontal:10}}
         {...props}
         >
        <Text style={{marginLeft:25,fontSize:18}}>Skip</Text>
        </TouchableOpacity>    
        )
    
    const Next = ({...props}) =>(
        <TouchableOpacity
            style={{marginHorizontal:10}}
            {...props}
            >
        <Text style={{marginRight:25,fontSize:18}}>Next</Text>
        </TouchableOpacity>    
        )
 //End customize button components

   
return (
        <View style={styles.container}>
            <Onboarding
            containerStyles={styles.onboardingContainer}

            DoneButtonComponent={Done}
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            onSkip={()=>navigation.replace('Login')}
            onDone={()=>navigation.navigate('Login')}
                pages={[
                    {
                    backgroundColor: '#ffffff',
                    image: <Image source={require('../assets/images/onboarding1.png')} style={styles.img} />,
                    title: 'Welcome to CLINIC KIGANJANI APP',
                    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
                    },
                    {
                        backgroundColor: '#ffffff',
                        image: <Image source={require('../assets/images/onboarding2.png')} style={styles.img}/>,
                        title: 'Inajali afya ya Mama na Mtoto',
                        subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
                    },
                    {
                        backgroundColor: '#ffffff',
                        image: <Image source={require('../assets/images/onboarding3.png')}  style={styles.img}/>,
                        title: 'Inajali afya ya Mama Mjamzito',
                        subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
                    },
                ]}
                />
        </View>
    )
}


export default OnboardinScreen;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img:{
        width:420,
        height:420,
    },
    onboardingContainer: {
        padding:50,
    },
})