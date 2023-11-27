import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/ListProducts';
import Login from './screens/Login';
import Signup from './screens/Signup';


const Stack = createStackNavigator();

export function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
       
        <Stack.Screen name="Home" component={Home} />
       

      </Stack.Navigator>
    </NavigationContainer>
  );
}
