import React from 'react'
import { View, Text, Image, Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get("window");

const style = StyleSheet.create(
    {
        contaier:{
            width,
            alignItems: 'center',
            justifyContent: 'center', 
        },
        titleContainer:{
            
        },
        text:{
            color: 'white',
            fontSize: 40
        },
        image: {
            width: 300,
            height: 300
        } 
    }
)

const Slide = ({image, text, right}) => {
  return (
    <View style={style.contaier}>
        <View style={style.titleContainer}>
            <Image style={style.image} source={image} />
        </View>
    </View>
  )
}

export default Slide;