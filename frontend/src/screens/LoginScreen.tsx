import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import LoginComponent from "../components/LoginComponent";
import CreateAccountComponent from "../components/CreateAccountComponent";


export default function LoginScreen() {

  let isLoggin = false;

  const [login, onChangeLogin] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const loginComponent = LoginComponent();
  const createAccountComponent = CreateAccountComponent();

  const Demo = () => isLoggin ? loginComponent : createAccountComponent

  return (
    <View style={styles.container}>
      <Demo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center'
  },
})