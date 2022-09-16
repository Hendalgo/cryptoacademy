import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home';
import Circle from './src/components/Circle';
import Kajabi from './src/components/Kajabi';
import Messages from './src/components/Messages';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const App= () => {

  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            headerShown: false
          }
        }
      >
        <Stack.Screen 
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='Circle'
          component={Circle}
        />
        <Stack.Screen 
          name='Kajabi'
          component={Kajabi}
        />
        <Stack.Screen 
          name='Messages'
          component={Messages}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;