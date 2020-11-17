import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Container List
import SampleNews from 'containers/Sample';
import Splash from 'containers/Splash';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SampleNews" component={SampleNews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
