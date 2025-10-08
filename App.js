import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import styled from "styled-components";
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/pages/login/LoginPage"
import Register from './src/pages/register/Register';
import Menu from './src/pages/menu/Menu';
import Entry from './src/pages/entry/Entry';
import Exit from './src/pages/exit/Exit';
import Cep from './src/pages/cep';

const ContainerApp = styled.SafeAreaView`
  flex: 1;
`

const RootStack = createNativeStackNavigator({
  initialRouteName: "Login",
  screens: {
    Home: Menu,
    Login: Login,
    Register: Register,
    Entry: Entry,
    Exit: Exit
  },
  screenOptions: {
    headerShown: false
  }
}
)

const Navigation = createStaticNavigation(RootStack)

export default function App() {
  return (
    <ContainerApp >
      <StatusBar hidden/>
      {/* <Navigation /> */}
      <Cep/>

    </ContainerApp>
  );
}
