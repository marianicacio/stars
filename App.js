import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import styled from "styled-components";
import Login from "./src/pages/login/LoginPage"
import Register from './src/pages/register/Register';
import Menu from './src/pages/menu/Menu';
import Entry from './src/pages/entry/Entry';
import Exit from './src/pages/exit/Exit';

const ContainerApp = styled.SafeAreaView`
  flex: 1;
`

export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden/>
      <Exit/>
    </ContainerApp>
  );
}
