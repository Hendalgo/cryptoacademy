import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput, RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as Progress from 'react-native-progress';

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
      fontSize: 38, 
      marginBottom: 50,
    },
    name:{
      color: "white",
      borderBottomWidth: 1,
      borderColor: "#FFFFFF80",
      marginBottom: 20
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
    },
    error:{
      color: '#ed6e6e',
      marginTop: 20
    }
  }
)

const Register = ({navigation}) => {

  const [name, onChangeName] = React.useState();
  const [email, onChangeEmail] = React.useState();
  const [error, setError] = React.useState({error: false});
  const [load, setLoad] = React.useState();
  const validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setError({
        error: true,
        text: 'Email ungültig'
      })
      
      setLoad(false);
      return false;
    }
    else {
      return true;
    }
  }
  const saveUser = async () => {
    try {
      setLoad(true);
      const trimedName = name?name.trim():null;
      if (trimedName) {
        if (validate(email)){
          const user = {
            name,
            email
          };
          await AsyncStorage.setItem("user", JSON.stringify(user));
          navigation.reset(
            {
                index: 1,
                routes: [{name: 'Home'}]
            }
          )
        }
      }
      else{
        setLoad(false);
        setError({error: true, text: 'Name ungültig'})
      } 
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={style.container}>
      <Text style={style.text}>
          Hi Champ,
          Verrate uns doch einmal deinen Namen...
        </Text>
        <TextInput 
          style={style.name}
          onChangeText={onChangeName}
          value={name}
          placeholder="z.B.: Tim Stern"
          placeholderTextColor="#FFFFFF40"
        />
        <TextInput 
          style={style.name}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="z.B.: tim@cryptochampion.de"
          placeholderTextColor="#FFFFFF40"
        />
        {
          load
          ?<Progress.Circle color='#EBA721' style={{alignSelf: 'center'}} indeterminate={true} />
          :<RectButton style={style.buttonContainer} onPress={saveUser}>
              <View style={style.button} >
                <Text style={style.buttonText}>
                  Weiter
                </Text>
              </View>
          </RectButton>
        }
        {
          error.error
          ?<Text style={style.error}>
            {error.text}
          </Text>
          :null
        }
    </View>
  )
}

export default Register