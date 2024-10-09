import React, {useState} from 'react'
import { View, Dimensions, Pressable, Text, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';
import * as Progress from 'react-native-progress';

const {width, height} = Dimensions.get('window');

const Market = (props)=> {
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
                source={{uri: 'https://www.tradingview-widget.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22dark%22%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22www.tradingview.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%7D'}} 
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
export default Market;