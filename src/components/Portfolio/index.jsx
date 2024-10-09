import React, {useState} from 'react'
import { View, Dimensions, Pressable, Text, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import * as Progress from 'react-native-progress';

const {width, height} = Dimensions.get('window');

const Portfolio = (props)=> {
    const handdleNav = () => {
        props.navigation.navigate('Home');
    }
    const [load, setLoad] = useState(false);
    const [progress, setProgress] = useState();
    return (
        <View
            style={{width, height, flex: 1}} 
        >
            {load
            ?null
            :<Progress.Bar borderRadius={0} color='orange' borderWidth={0} progress={progress} width={null} />
            }
            <WebView 
                style={{width, height, zIndex: 0}} 
                originWhitelist={['*']} 
                source={{uri: 'https://coingecko.com/de/portfolio'}} 
                onLoadProgress= {(e)=> setProgress(e.nativeEvent.progress)}    
                onLoadEnd= {()=> setLoad(true)}
            />
        </View>
    );
}
const style = StyleSheet.create( 
    {
        floatingButton: {
            position: 'absolute', 
            width:60, 
            height: 60, 
            bottom: 50, 
            right: 20, 
            backgroundColor: '#2d2d2d', 
            flex: 1, 
            alignContent: 'center', 
            alignItems: 'center', 
            justifyContent: 'center', 
            borderRadius: 50, 
            padding: 10 
        },
        floatingText: {
            fontSize: 30,
            color: 'white'
        }
    }
);
export default Portfolio;