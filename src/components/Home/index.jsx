import React, {useState} from 'react';
import { View, Text, Pressable, StyleSheet, Image, Dimensions} from 'react-native';
import CryptoLogo from '../../assets/img/crypto-icon.png';
import messageIcon from '../../assets/img/message-icon.png';
import portfolioIcon from '../../assets/img/portfolio-icon.png'
import courseIcon from '../../assets/img/course-icon.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from './Button';
import Tutorial from '../Tutorial';
import WebView from 'react-native-webview';
import SpiralCircle from '../../assets/img/spiral-circle.png';

const {width, height} = Dimensions.get('window');

const Home = (props)=> {
    //const x = useVector();
    const [tutorial, setTutorial] = useState(false)
    const issetUser = async ()=>{
        const user = await AsyncStorage.getItem('user');
        console.log(user);
        if (user !== null) {
            setTutorial(true);
        }
    }
    issetUser();
    const jsCode = `
        setTimeout(
            ()=>{
                document.getElementsByClassName('banner')[0].parentNode.removeChild(document.getElementsByClassName('banner')[0]);
                document.querySelector('header').parentNode.removeChild(document.querySelector('header'));
                document.getElementsByClassName('bubble-chart-header')[0].parentNode.removeChild(document.getElementsByClassName('bubble-chart-header')[0]);
            }
        ,200)
    `
    return (
        tutorial?
        <View style={style.container}>   
            <View style={style.header}>
            <Image style={style.spiral} source={SpiralCircle}/>
                <View style={style.nameContainer}>
                    <Text style={style.hi}>
                        Hi, 
                    </Text>
                    <Text style={style.name}>
                        Bernd
                    </Text>
                </View>
                <View style={style.bubblesContainer}>
                    <Text style={style.todayText}>
                        Today Markets
                    </Text>
                    <WebView injectedJavaScript={jsCode} style={style.bubbles} source={{uri: 'https://cryptobubbles.net'}}/>
                </View>
            </View>
            <View style={style.footer}>
                <View style={style.row}>
                    <Button nav={props} text="Circle" logo={messageIcon}/>
                    <Button nav={props} text="Kajabi" logo={courseIcon}/>
                </View>
                <View style={style.row}>
                    <Button nav={props} text="Circle" logo={CryptoLogo}/>
                    <Button nav={props} text="Kajabi" logo={portfolioIcon}/>
                </View>
            </View>
        </View>
        :
        <Tutorial />
    );
}

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#191b1f',
            alignItems: 'center',
            justifyContent: 'center',
        },
        header: {
            justifyContent: 'flex-end',
            backgroundColor: '#0e0f11',
            height: height * 0.45,
            paddingBottom: 20,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            zIndex: 0
        },
        bubblesContainer:{
            height: height * 0.2,
            paddingRight: 50,
            paddingLeft: 50,
            borderRadius: 75,
            zIndex: 2
        },
        todayText:{
            marginBottom: 5,
            color: "white",
            textTransform: 'uppercase',
            fontWeight: 'bold'
        },
        bubbles:{
            width: width *0.8,
            borderRadius: 75,
            zIndex: 2
        },
        nameContainer:{
            paddingRight: 50,
            paddingLeft: 50,
            flexDirection: 'row',
            marginBottom: 15,
        },
        hi:{
            fontSize: 30,
            fontWeight: 'bold',
            textTransform: 'uppercase'
        },
        name:{
            marginLeft: 4,
            fontSize: 30,
            color: "#eba721",
            fontWeight: 'bold',
            textTransform: 'uppercase'
        },
        spiral:{
            position: 'absolute',
            top: -150,
            right: -90,
            zIndex: 1,
            width: 300,
            height: 300
        },
        row:{
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        footer:{
            height: height * 0.55,
            justifyContent: 'center',
            alignItems: 'flex-start'
        },
    }
)

export default Home;