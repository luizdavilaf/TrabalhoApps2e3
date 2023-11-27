
import 'react-native-gesture-handler';

import { MyStack } from './src/MyStack';

import {  AuthProvider } from './src/contexts/auth/auth';






export default function App() {
  
  return (
    <AuthProvider> <MyStack /></AuthProvider>
     
    
  );
}



