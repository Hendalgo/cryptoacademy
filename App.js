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
import Market from './src/components/Market';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab =createBottomTabNavigator();


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
        <Tab.Navigator
          screenOptions={
            {
              headerShown: false,
              tabBarActiveTintColor: "#eba721",
              tabBarInactiveTintColor: "white",
              tabBarStyle: {
                borderTopRightRadius: 8,
                borderTopLeftRadius: 8,
                backgroundColor: "#0e0f11",
                borderTopColor: "#0e0f11"
              }
            }
          }
        >
          <Tab.Screen
            name='Index'
            component={HomeStack}
            options={
              {
                tabBarLabel: 'Startseite',
                tabBarIcon: ({color, size}) =>(
                  <Icon name='home' color={color} size={size} />
                )
              }
            }
          />
          <Tab.Screen 
            name="Markt"
            component={Market}
            options={
              {
                tabBarLabel: 'Markt',
                tabBarIcon: ({color, size}) =>(
                  <Icon name='bar-chart-o' color={color} size={size} />
                )
              }
            }
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NavProvider>
  );
};

export default App;