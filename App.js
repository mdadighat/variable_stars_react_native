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


const newColorTheme = {
  brand: {
    900: '#567aa3',
    800: '#749ECA',
    700: '#BEC6C9',
  },
};

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
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


export function Example() {
  return (
    <VStack space={4} alignItems="center">
      <Heading textAlign="center" mb="10">
        VStack
      </Heading>
      <Center w="200" h="20" bg="#bec6c9" rounded="md" shadow={3} />
      <Center w="100" h="20" bg="#749ECA" rounded="md" shadow={3} />
      <Center w="100" h="20" bg="#567aa3" rounded="md" shadow={3} />
    </VStack>
  )
}
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};
// extend the theme
const customTheme = extendTheme({ config });

export default function () {
  return (
    <NavigationContainer>
      
    <NativeBaseProvider theme={customTheme}>
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator> 
   
      <SafeAreaView>


      </SafeAreaView>
    </NativeBaseProvider>
    </NavigationContainer>
  );
}
