import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { NavContext } from '../../context/NavContext';

const style = StyleSheet.create(
    {
        container: {
            justifyContent: 'center',
            alignItems: 'center'
        },
        button:{
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 50, 
            marginTop: 12,
            minWidth: 100,
            borderWidth: 1,
        }
    }
)

const Button = (props) => {
  const backgroundColor = props.variant === "primary" ? "white":"transparent";  
  const color = props.variant === "primary" ? "#0e0f11":"white";
  const borderColor = props.variant === "primary"? "lightgray": "lightgray";
  const width = props.variant === "primary"? 150:60;
  const height = props.variant === "primary"? 60:60;

  const {tutorial, setTutorial, uriCircle, setUriCircle} = useContext(NavContext);
  const changeTutorial = async()=>{
    if (props.variant === "primary") {
        await AsyncStorage.setItem('tutorial', 'false');
        props.navigation.reset(
            {
                index: 1,
                routes: [{name: 'Register'}]
            }
        )
    }else{
        props.onPress();
    }
  } 

  return (
        <RectButton style={style.container} onPress={changeTutorial}>
            <View style={[style.button, {backgroundColor, borderColor, width, height}]}>
                <Text style={{ color }}>
                    {props.label}
                </Text>
            </View>
        </RectButton>
  )
}

export default Button;      