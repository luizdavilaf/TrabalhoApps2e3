import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { useContext, useState } from 'react';
import Home from './screens/ListProducts';
import Login from './screens/Login';
import Signup from './screens/Signup';
import RegisterProduct from './screens/CreateProduct';
import { AuthProvider, AuthContext } from './contexts/auth/auth';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import arrowleft from '../assets/arrow-left.svg';
import helpcircle from '../assets/help-circle.svg';


const Stack = createStackNavigator();

export function MyStack() {
  const { isLogged } = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator 
      
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fafafa', 
            height: 45,    
            paddingRight:2,            
                                           
          },          
          headerBackImage: () => (           
            <StyledImage
              source={arrowleft}
              style={{ width: 30, height: 30, marginRight: 2, paddingRigth: 2}} 
            />
          ),          
          headerRight: () => (           
            <StyledImageRight
              source={helpcircle} 
              style={{ width: 25, height: 25, marginRight: 10, paddingRigth: 2 }}
            />
          ),          
          headerTintColor: '#ee4d2d',
          headerTitleAlign: 'left',   
          headerTitleContainerStyle: {
            padding: 2,
          },
          headerTitleStyle: {
            fontStyle: "Arial",
            fontSize: 20,            
            marginRight: 20,
            marginLeft: 0,
            paddingLeft: 2,
            color: 'rgba(0,0,0,0.70)', 
          },
        }}>
        {isLogged ? (<Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />) 
        : (<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />)}
        <Stack.Screen name="Cadastrar" component={Signup} />
        <Stack.Screen name="Registrar Produto" component={RegisterProduct} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const StyledImage = styled.Image`
  width: 40px; 
  height: 40px;
  margin-right: 2px; 
`; 

const StyledImageRight = styled.Image`
  width: 20px; 
  height: 20px;
  //margin-right: 2px; 
`


