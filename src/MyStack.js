import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { useContext, useState } from 'react';
import Home from './screens/ListProducts';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { AuthProvider, AuthContext } from './contexts/auth/auth';

const Stack = createStackNavigator();

export function MyStack() {
  const { isLogged } = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogged ? (<Stack.Screen name="Home" component={Home} />) : (<Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />)}
        <Stack.Screen name="Cadastrar" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
