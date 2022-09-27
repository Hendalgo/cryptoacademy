import React from 'react'
import { View, Dimensions, Pressable, Text, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const {width, height} = Dimensions.get('window');

const Kajabi = (props)=> {
    const handdleNav = () => {
        props.navigation.navigate('Home');
    }
    return (
        <View
            style={{width, height, flex: 1}} 
        >
            <WebView 
                style={{width, height, zIndex: 0}} 
                originWhitelist={['*']} 
                source={{uri: 'https://id.kajabi.com/login?state=hKFo2SAxZmJQeGxtb3VQTVAyNlB6aC1KenQ0bjVEaFBOZ3VjeaFupWxvZ2luo3RpZNkgb0hqLUZYaUVMWXdNNzhWUFJwX1FMZzE0aHMxaWhBTlijY2lk2SBMS3hndExFUmVuS3NHbURPN2kwMEdnd0NuMTN6dEZUMA&client=LKxgtLERenKsGmDO7i00GgwCn13ztFT0&protocol=oauth2&leeway=60&nonce=1ef7073e72ba540d75d3f1cb94c84a51&redirect_uri=https%3A%2F%2Fapp.kajabi.com%2Fauth%2Fauth0%2Fcallback&response_type=code&scope=openid%20profile%20email'}} />
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
export default Kajabi;