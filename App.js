import 'react-native-gesture-handler';
import React from 'react';
import { AppNavigator } from './src/navigation/appNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CameraScreen from './src/components/cameraScreen';
import HomeScreen from './src/components/home';
import Login from './src/components/login';
import BackOffice from './src/components/backOffice';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen options={{ headerLeft: null }} name="BackOffice" component={BackOffice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



