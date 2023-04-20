import  { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons,Foundation,Entypo } from '@expo/vector-icons';

import Login from './Screens/Login';
import Home from './Screens/Home';
import Bucket from './Screens/Bucket';
import Promo from './Screens/Promo';
import More from './Screens/More';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
     <Stack.Navigator>
       {!isLoggedIn ? (
         <Stack.Screen
           name='login'
           component={Login}
           options={{ headerShown: false }}
           handleLogin={handleLogin}
         />
       ) : (
         <Stack.Screen
           name='main'
           component={BottomNavigation}
           options={{ headerShown: false }}
         />
       )}
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const BottomNavigation = () => {
  return (
    <Tab.Navigator 
    screenOptions={() => ({
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name='Home' component={Home} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="home" size={size} color={color} />
        ),
      }}
      />
      <Tab.Screen name='Promo' component={Promo}
         options={{
          tabBarIcon: ({ color, size }) => (
            <Foundation name="price-tag" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name='Bucket' component={Bucket} 
       options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bucket" size={size} color={color} />
        ),
      }}
      />
      <Tab.Screen name='More' component={More}
       options={{
        tabBarIcon: ({ color, size }) => (
          <Foundation name="indent-more" size={size} color={color} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}
