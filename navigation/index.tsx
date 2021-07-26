import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LinkingConfiguration from './LinkingConfiguration';

import { RootStackParamList } from '../types';
import NotFoundScreen from '../screens/NotFoundScreen';
import MainNavigator from './MainNavigator';
import { useDispatch } from 'react-redux';
import { getTasksStorage } from '../redux/actions';

export default function Navigation() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTasksStorage())
  }, [])


    return (
      <NavigationContainer
        linking={LinkingConfiguration} >
        <RootNavigator />
      </NavigationContainer>
    );
  }
  
  const Stack = createStackNavigator<RootStackParamList>();
  
  function RootNavigator() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Root" component={MainNavigator} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      </Stack.Navigator>
    );
  }
  