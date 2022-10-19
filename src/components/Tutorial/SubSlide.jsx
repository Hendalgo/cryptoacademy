import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from './Button';

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
    },
    subTitle:{
      color: 'white',
      fontSize: 26,
      lineHeight: 40,
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    description:{
      color: '#EBA721',
      fontSize: 26,
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }
  }
);

const SubSlide = ({subTitle, description, last, onPress, navigation}) => {
  return (
    <View style={style.container}>
      <Text style={style.subTitle}>{subTitle}</Text>
      <Text style={style.description}>{description}</Text>
      <Button 
        {...{navigation}}
        label={last?"Let's get started":"Weiter"} 
        variant={last?"primary":"default"}
        onPress={onPress} 
      />
    </View>
  )
}

export default SubSlide;