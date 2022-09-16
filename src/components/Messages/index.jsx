import React from 'react'
import { View, Dimensions, Pressable, Text, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const Messages = (props)=> {
    const handdleNav = () => {
        props.navigation.navigate('Home');
    }
    return (
        <View
            style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height-10}} 
        >
            <WebView 
                style={{width: "100%", height: "100%", zIndex: 0}} 
                originWhitelist={['*']} 
                source={{uri: 'https://cryptoacademy.circle.so/messages'}} />
            <Pressable 
                onPress={handdleNav}
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
export default Messages;