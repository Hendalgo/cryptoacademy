import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
      paddingLeft: 50,
      paddingRight: 50,
      backgroundColor: "#191b1f"
    },
    text:{
      color: "#FFFFFF80",
      fontSize: 50, 
      marginBottom: 50,
    },
    name:{
      color: "white",
      borderBottomWidth: 1,
      borderColor: "#FFFFFF80"
    },
    buttonContainer:{
      marginTop: 50,
      borderRadius: 50
    },  
    button:{
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50, 
      borderWidth: 1,
      borderColor: "#FFFFFF80",
      padding: 5
    },
    buttonText:{
      color: "#FFFFFF80"
    }
  }
)

const Register = ({navigation}) => {

  const [name, onChangeName] = React.useState();

  const saveUser = async () => {
    try {
      const trimedName = name.trim();
      if (trimedName.length <= 10 && trimedName !="") {
        const user = {
          name
        };
        await AsyncStorage.setItem("user", JSON.stringify(user));
        navigation.reset(
          {
              index: 1,
              routes: [{name: 'Home'}]
          }
        )
      }
      else{
        console.log(name);
      } 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.text}>
          What's Your Name?
        </Text>
        <TextInput 
          style={style.name}
          onChangeText={onChangeName}
          value={name}
          placeholder="e.g: Tim Stern"
          placeholderTextColor="#FFFFFF40"
        />
        <RectButton style={style.buttonContainer} onPress={saveUser}>
          <View style={style.button} >
            <Text style={style.buttonText}>
              Save
            </Text>
          </View>
        </RectButton>
    </View>
  )
}

export default Register