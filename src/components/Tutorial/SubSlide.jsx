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
      color: 'black',
      fontSize: 24,
      lineHeight: 50,
      fontWeight: 'bold',
    },
    description:{
      color: '#191b1f80',
      fontSize: 16,
      fontWeight: 'normal'
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
        label={last?"Let's get started":"Next"} 
        variant={last?"primary":"default"}
        onPress={onPress} 
      />
    </View>
  )
}

export default SubSlide;