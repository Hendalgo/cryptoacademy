import React, {useState} from 'react'
import { View, Dimensions, Pressable, Text, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const {width, height} = Dimensions.get('window');

const Circle = (props)=> {
    
    const [url, setUrl] = useState('https://cryptoacademy.circle.so')
    const handdleNav = () => {
        props.navigation.navigate('Home');
    }
    const handdleWebView = (e)=>{
        setUrl(e.url);
    } 
    return (
        <View
            style={{width: width, height: height}} 
        >
            <WebView 
                onNavigationStateChange={(e)=> handdleWebView(e)}
                style={{width: width, height: height, zIndex: 0}} 
                originWhitelist={['*']} 
                source={{uri: url}} />
            <Pressable 
                onPress={() => handdleNav('Kajabi')}
                style={style.floatingButton}>
                <Text style={style.floatingText}>
                    +
                </Text>
            </Pressable>
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
export default Circle;