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
        resizeMode: 'stretch'
    }
});

function Button(props) {
  let width;
  let height;
  switch (props.text) {
    case "Messages":
      width = "25%";
      height = "25%"
      break;
    case "Courses":
      width = "30%";
      height = "20%";
      break;
    case "Community":
      width = "25%";
      height = "25%";
      break;
    case "Portfolio":
      width = "28%";
      height = "22%";
      break;
    default:
      break;
    }
    const handdleNav = (nav) => {
      if (nav === "Community") {
        nav = "Circle";
      }
      props.nav.navigation.navigate(nav);
    }
  return (
    <Pressable
      onPress={()=>handdleNav(props.text)}
      style={style.button}
    >
      <Image 
          style={[style.logo, { width, height}]}
          source={props.logo}
      />
      <Text style={style.buttonText}>
          {props.text}
      </Text>
    </Pressable>
  )
};

export default Button;