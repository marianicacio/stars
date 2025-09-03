import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import styled from "styled-components";
import Login from "./src/pages/LoginPage"

const ContainerApp = styled.SafeAreaView`
  flex: 1;
`

export default function App() {
  return (
    <ContainerApp>
      <StatusBar hidden/>
      <Login/>
    </ContainerApp>
  );
}
