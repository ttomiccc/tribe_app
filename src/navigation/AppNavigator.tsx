import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';

// 스크린 컴포넌트들을 임포트
import HomeScreen from '../screens/HomeScreen';
import TribeListScreen from '../screens/TribeListScreen';

const Stack = createStackNavigator<RootStackParamList>();

const  AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TribeList" component={TribeListScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default AppNavigator;