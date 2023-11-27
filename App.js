
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { MyStack } from './src/MyStack';
import Login from './src/screens/Login';
import { useContext, useState } from 'react';
import { AuthContext, AuthProvider } from './src/contexts/auth/auth';
import Signup from './src/screens/Signup';
import { useNavigation, NavigationContainer } from '@react-navigation/native';



export function AppAuth() {
  
  const { isLogged } = useContext(AuthContext);
 
  return (
    <NavigationContainer>
      {isLogged ? <MyStack /> : <Login />}
    </NavigationContainer>
  );
}

export default function App() {
  
  return (
    <AuthProvider>
      <AppAuth />
    </AuthProvider>
  );
}



