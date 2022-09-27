import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home';
import Circle from './src/components/Circle';
import Kajabi from './src/components/Kajabi';
import Messages from './src/components/Messages';
import Register from './src/components/Register';
import Portfolio from './src/components/Portfolio';
import { NavigationContainer } from '@react-navigation/native';
import { NavProvider } from './src/context/NavContext';
import Tutorial from './src/components/Tutorial';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Tab = createDrawerNavigator();


const HomeStack = ()=>{
  return(
    <Stack.Navigator
        screenOptions={
          {
            headerShown: false
          }
        }
    >
      <Stack.Screen
        name='Tutorial'
        component={Tutorial}
      />
      <Stack.Screen 
        name='Register'
        component={Register}
      />
      <Stack.Screen 
        name='Home'
        component={Home}
      />
      <Stack.Screen
        name='Circle'
        component={Circle}
      />
      <Stack.Screen 
        name='Courses'
        component={Kajabi}
      />
      <Stack.Screen 
        name='Messages'
        component={Messages}
      />
      <Stack.Screen 
        name='Portfolio'
        component={Portfolio}
      />
    </Stack.Navigator>
  )
}  

const App= () => {

  return(
    <NavProvider>
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </NavProvider>
  );
};

export default App;