import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/ListProducts';


const Stack = createStackNavigator();

export function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator
        initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
    
    </Stack.Navigator>
    </NavigationContainer>
  );
}
