import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraScreen from '../components/cameraScreen';
import HomeScreen from '../components/home';
import Login from '../components/login';


const Stack = createStackNavigator();

function AppNavigator() {
 return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="cameraScreen" component={CameraScreen} />
        <Stack.Screen name="login" component={Login} />        
      </Stack.Navigator>
    </NavigationContainer>
 );
}

export default AppNavigator;
