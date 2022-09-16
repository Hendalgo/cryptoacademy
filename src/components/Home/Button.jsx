import React from 'react';
import { Text, Pressable, Image, StyleSheet} from 'react-native';

const style = StyleSheet.create({
    button: {
        width: 110,
        height: 110,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 15,
        backgroundColor: '#0e0f11',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    logo:{
        width: "25%",
        height: "20%",
        resizeMode:  'stretch'
    }
});

function Button(props) {
    const handdleNav = (nav) => {
        props.nav.navigation.navigate(nav);
    }
  return (
    <Pressable
            onPress={()=>handdleNav(props.text)}
            style={style.button}
        >
            <Image 
                style={style.logo}
                source={props.logo}
            />
            <Text style={style.buttonText}>
                {props.text}
            </Text>
        </Pressable>
  )
};

export default Button