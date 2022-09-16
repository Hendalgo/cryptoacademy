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
        }    
    }
)

const Slide = ({image, text, right}) => {
  return (
    <View style={style.contaier}>
        <View style={style.titleContainer}>
            <Text style={style.text}>
                {text}
            </Text>
        </View>
    </View>
  )
}

export default Slide;