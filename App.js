/**
 * Variable Stars
 * http://tauridos.com/variable-stars
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { HStack, VStack, Button, 
  Text, Heading, Center,View, Pressable,
   Divider, NativeBaseProvider, extendTheme, 
   StatusBar, Box, IconButton } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

import MyIcon from './src/config/icon-font.js';
import SplashScreen from "react-native-splash-screen";
// color scheme hook
import {useColorScheme} from 'react-native';
// theme components and the navigation container
import {DarkTheme,DefaultTheme} from '@react-navigation/native'; 

// Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';


const newColorTheme = {
  brand: {
    900: '#567aa3',
    800: '#749ECA',
    700: '#BEC6C9',
  },
};

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    </View>
    </SafeAreaView>
  );
}

function LearnScreen({ navigation }) {
  return (
    <SafeAreaView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    </View>
    </SafeAreaView>
  );
}

function ExploreScreen({ navigation }) {
  return (
    <SafeAreaView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    </View>
    </SafeAreaView>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    </View>
    </SafeAreaView>
  );
}

const Drawer = createDrawerNavigator();

//const theme = extendTheme({ colors: newColorTheme });


function AppBar() {
  return <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <HStack bg="#567aa3" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" >
        <HStack alignItems="center">
          <IconButton icon={<MyIcon size={24} name="menu" color="white" />} />
          <Text color="white" fontSize="20" fontWeight="bold">
            Variable Stars
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<MyIcon name="moon-inv" size={24} color="white" />} />
          <IconButton icon={<MyIcon name="search" size={24} color="white" />} />
        </HStack>
      </HStack>
    </>;
}

export default function () {
  const scheme = DarkTheme;
  return (
    React.useEffect(() => {
      SplashScreen.hide();
    }, []),
    <NavigationContainer theme={scheme}>
      
    <NativeBaseProvider>
    <Drawer.Navigator 
    drawerContent={(props) => <CustomSidebarMenu {...props} />}
    initialRouteName="Variable Stars">
      
        <Drawer.Screen name="Variable Stars" component={HomeScreen} />
        <Drawer.Screen name="Learn" component={LearnScreen} />
        <Drawer.Screen name="Explore" component={ExploreScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator> 
   
    
    </NativeBaseProvider>
    </NavigationContainer>
  );
}
