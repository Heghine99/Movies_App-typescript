import React, {useContext} from 'react';

import Home from './../screens/HomeScreen/homeScreen';
import Details from './../screens/DetailsScreen/detailsScreen';
import Liked from './../screens/LikedScreen/likedScreen';
import Profile from './../screens/ProfileScreen/profileScreen';
import Dislike from './../screens/DislikedScreen/dislikedScreen';
import Save from './../screens/SaveScreen/saveScreen';
import Rating from './../screens/RatingScreen/ratingScreen';
import colors from './../assets/colors/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DarkModeContext} from '../components/Context/context';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const mode = useContext(DarkModeContext);

  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {backgroundColor: mode ? colors.white : colors.gray},
        activeTintColor: colors.orange,
        inactiveTintColor: mode ? colors.gray : colors.white,
        showLabel: false,
      }}>
      <Tab.Screen
        name="Movies App"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Dislike"
        component={Dislike}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="dislike1" size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="heart" size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" size={32} color={color} />
          ),
          // backgroundColor: mode ? colors.white : colors.gray,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Save"
          component={Save}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Rating"
          component={Rating}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
