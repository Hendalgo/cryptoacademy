import React, {useState} from 'react'
import { View, Dimensions, Pressable, Text, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import * as Progress from 'react-native-progress';

const {width, height} = Dimensions.get('window');

const Circle = (props)=> {
    let uri = 'https://community.cryptochampion.de';
    if (props.route.params) {
        uri = props.route.params.uri;
    }
    const [url, setUrl] = useState(uri);
    
    const handdleNav = () => {
        props.navigation.navigate('Home');
    }
    const handdleWebView = (e)=>{
        setUrl(e.url);
    } 
    const [load, setLoad] = useState(false);
    const [progress, setProgress] = useState();
    return (
        <View
            style={{width, height, flex: 1}} 
        >   
            {load
            ?null
            :<Progress.Bar color='orange' borderWidth={0} progress={progress} width={null} />
            }
            <WebView 
                onNavigationStateChange={(e)=> handdleWebView(e)}
                style={{width: width, height: height, zIndex: 0}} 
                originWhitelist={['*']} 
                source={{uri: url}} 
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
export default Circle;