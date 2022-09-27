import React, {useRef, useState} from 'react'
import { Dimensions, View, StyleSheet } from 'react-native';
import Animated, { divide, multiply } from 'react-native-reanimated';
import {useScrollHandler} from 'react-native-redash';
import Slide from './Slide';
import SubSlide from './SubSlide';
import Dot from './Dot';
import CryptoLogo from   '../../assets/logos/crypto-academy-logo.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get("window");
const style = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor: "#191b1f",
            
        },
        slider: {
            height: 0.61*height,
            backgroundColor: "#191b1f",
        },
        footer:{
            flex: 1,
            backgroundColor: 'white',
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50
        },
        footerContent: {
            flex: 1,
            flexDirection: 'row',
        },
        pagination:{
            ...StyleSheet.absoluteFillObject,
            //backgroundColor: "lightgray", 
            height: "20%",
            flexDirection: 'row',
            alignItems: 'center',
            width: width,
            justifyContent: 'center'
        }
    }
)

const Tutorial = ({navigation}) => {
    const [tutorial, setTutorial] = useState(false);
    const issetUser = async ()=>{
        try {
            const changeRegister = await AsyncStorage.getItem("tutorial");
            if (changeRegister === 'false') {
                navigation.reset(
                    {
                        index: 0,
                        routes: [{name: 'Register'}]
                    }
                )
            }
            const currentUser = await AsyncStorage.getItem('user') ;
            if (currentUser !== null) {
                navigation.reset(
                    {
                        index: 1,
                        routes: [{name: 'Home'}]
                    }
                ) 
                return;
            }
            else{
                setTutorial(true);
            }
        } catch (error) {
            setTutorial(true);
        }
    }
    issetUser();

    const slideItems = [
        {
            text: 'Primer Slider',
            img: CryptoLogo,
            subTitle: 'Primer Slider',
            description: 'Lorem ipsum'
        },
        {
            text: 'Segundo Slider',
            img: CryptoLogo,
            subTitle: 'Segundo Slider',
            description: 'Lorem ipsum'
        },
        {
            text: 'Tercer Slider',
            img: CryptoLogo,
            subTitle: 'Lorem ipsum',
            description: 'Lorem ipsum'
        }
    ];
    //const x = useValue(0);
    //const onScroll = onScrollEvent({x});
    const {scrollHandler, x} = useScrollHandler();

    const scroll = useRef();
  return (
        tutorial?
            <View style={style.container}>
            <Animated.View style={style.slider}>
                <Animated.ScrollView 
                    ref={scroll}
                    horizontal 
                    snapToInterval={width} 
                    decelerationRate="fast" 
                    showsHorizontalScrollIndicator={false} 
                    bounces={false}
                    scrollEventThrottle={1}
                    {...scrollHandler}
                > 
                    {
                        slideItems.map( ({description, img}, index) =>{
                            return (
                                <Slide key={index}  image={img} description={description}/>
                            );
                        })
                    }
                </Animated.ScrollView>
            </Animated.View>
            <View style={style.footer}>
                <Animated.View style={{...StyleSheet.absoluteFillObject}}>

                </Animated.View>
                <View style={style.pagination}>
                        {
                            slideItems.map((_, index)=>{
                                return(
                                    <Dot key={index} currentIndex={divide(x, width)} index = {index}/>
                                )
                            })
                        }
                    </View>
                <Animated.View style={
                    [
                        style.footerContent, 
                        {
                            width: width* slideItems.length, 
                            transform: [
                                {
                                    translateX: multiply(x,-1)
                                }
                            ]
                        }
                    ]
                }>
                    
                    {
                        slideItems.map(
                            ({subTitle, description}, index) => {
                                return (
                                    <SubSlide 
                                        {...{navigation}}
                                        onPress={
                                            () =>{
                                                if(scroll.current){
                                                    scroll.current.scrollTo({x: width * (index +1), animated: true});
                                                }
                                            }
                                        } 
                                        subTitle={subTitle} last={index === (slideItems.length-1)}description={description} key={index} />
                                )
                            }
                        )
                    }
                </Animated.View>
            </View>
        </View>:<View></View>
  )
}

export default Tutorial;