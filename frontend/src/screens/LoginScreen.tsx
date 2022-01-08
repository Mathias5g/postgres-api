import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import LoginComponent from "../components/LoginComponent";

export default function LoginScreen() {

  let isLoggin = false;

  const [login, onChangeLogin] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={styles.container}>
      <LoginComponent />
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