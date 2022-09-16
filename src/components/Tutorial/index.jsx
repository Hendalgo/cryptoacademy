import React from 'react'
import { Dimensions, View, StyleSheet } from 'react-native';
import Animated, { useValue } from 'react-native-reanimated';
import Slide from './Slide';
import SubSlide from './SubSlide';

const {width, height} = Dimensions.get("window");
const style = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor: "white"
        },
        slider: {
            height: 0.61*height,
            backgroundColor: "#2d2d2d",
        },
        footer:{
            flex: 1
        }
    }
)

const Tutorial = () => {
    const slideItems = [
        {
            text: 'Primer Slider',
            subTitle: 'Lorem ipsum',
            description: 'Lorem ipsum'
        },
        {
            text: 'Segundo Slider',
            subTitle: 'Lorem ipsum',
            description: 'Lorem ipsum'
        },
        {
            text: 'Tercer Slider',
            subTitle: 'Lorem ipsum',
            description: 'Lorem ipsum'
        }
    ];
    const x = useValue(0);
    //const onScroll = onScrollEvent({x});
  return (
    <View style={style.container}>
        <View style={style.slider}>
            <Animated.ScrollView 
                horizontal 
                snapToInterval={width} 
                decelerationRate="normal" 
                showsHorizontalScrollIndicator={false} 
                bounces={false}
    
            > 
                {
                    slideItems.map( ({text}, index) =>{
                        return (
                            <Slide key={index} text={text}/>
                        );
                    })
                }
            </Animated.ScrollView>
        </View>
        <View style={style.footer}>
            <View style={{...StyleSheet.absoluteFillObject, backgroundColor: "#2d2d2d"}}>

            </View>
            <View style={{flex: 1, backgroundColor:"white", borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
                {
                    slideItems.map(
                        ({subTitle, description}, index) => {
                            return (
                                <SubSlide subTitle={subTitle} x={x} last={index === (slideItems.length-1)}description={description} key={index} />
                            )
                        }
                    )
                }
            </View>
        </View>
    </View>
  )
}

export default Tutorial;