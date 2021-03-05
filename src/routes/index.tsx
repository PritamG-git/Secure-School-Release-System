import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Parent from '../pages/parent';
import Home from '../pages/home';
import PickUpView from '../pages/parent/pickupview';
import StaffView from '../pages/staff';

const Routes = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Parent" component={Parent} />
        <Stack.Screen name="PickUpView" component={PickUpView} />
        <Stack.Screen name="StaffView" component={StaffView} />
      </Stack.Navigator>
    </>
  );
};

export default Routes;
