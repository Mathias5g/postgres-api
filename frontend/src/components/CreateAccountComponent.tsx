import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

export default function CreateAccountComponent() {

  const [login, onChangeLogin] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
      <View style={styles.containerInfo}>
        <TextInput 
          style={styles.textInput} 
          onChangeText={onChangeLogin} 
          value={login} 
        />
        <TextInput 
          style={styles.textInput} 
          secureTextEntry={true} 
          onChangeText={onChangePassword} 
          value={password} 
        />
        <TouchableOpacity
          style={styles.button} 
          onPress={() => {}} 
        >
          <Text style={styles.textButton}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button} 
          onPress={() => {}} 
        >
          <Text style={styles.textButton}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  containerInfo: {
    width: '100%',
    height: '50%',
    paddingTop: 50,
    paddingBottom: 50,
    marginTop: 'auto',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20
  },
  textInput: {
    width: '90%',
    padding: 15,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5
  },
  button: {
    width: '90%',
    padding: 20,
    backgroundColor: '#0000FF',
    borderRadius: 5,
    alignItems: 'center',
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
})