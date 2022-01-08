import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Button } from "react-native";
import { api } from '../services/api';

import { EvilIcons } from '@expo/vector-icons';

interface iUser {
  firstName: string;
  email: string;
  password: string;
}

export default function LoginComponent() {

  const [userAlready, onChangeUserAlready] = React.useState(true);

  const Login = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState(false);
  
    const loginAccountHandler = (email: string, password: string) => console.log({
      email,
      password
    })
  
    return (
        <View style={styles.containerInfo}>
          <View style={styles.containerInputInfo}>
            <View style={styles.inputDecoration}>
              <EvilIcons name="envelope" size={36} color="black" />
              <TextInput 
                style={styles.textInput}  
                onChangeText={setEmail} 
                value={email} 
              />
            </View>
            <View style={styles.inputDecoration}>
              <EvilIcons name="lock" size={36} color="black" />
              <TextInput 
                style={styles.textInput}  
                onChangeText={setPassword} 
                value={password} 
              />
            </View>
          </View>
          <View style={styles.containerAction}>
            <TouchableOpacity
              style={styles.button} 
              onPress={() => loginAccountHandler(email, password)} 
            >
              <Text style={styles.textButton}>LOGIN</Text>
            </TouchableOpacity>
            <Button title="create new user" onPress={() => onChangeUserAlready(!userAlready)} />
          </View>
        </View>
    );
  }

  const CreateAccount = () => {

    const [firstName, setFirstName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
      
    const createAccountHandler = async ({ firstName, email, password }: iUser) => {
      const user = await api.post('/users', {
        firstName,
        email,
        password
      }).then(success => {
        if(success.status === 200) {
          setFirstName('');
          setEmail('');
          setPassword('');
        }
      });

      return user;
    };
  
    return (
        <View style={styles.containerInfo}>
          <View style={styles.containerInputInfo}>
            <View style={styles.inputDecoration}>
              <EvilIcons name="user" size={36} color="black" />
              <TextInput 
                style={styles.textInput} 
                onChangeText={setFirstName} 
                value={firstName} 
              />
            </View>
            <View style={styles.inputDecoration}>
              <EvilIcons name="envelope" size={36} color="black" />
              <TextInput 
                style={styles.textInput} 
                onChangeText={setEmail} 
                value={email} 
              />
            </View>
            <View style={styles.inputDecoration}>
              <EvilIcons name="lock" size={36} color="black" />
              <TextInput 
                style={styles.textInput} 
                onChangeText={setPassword}
                secureTextEntry={true} 
                value={password}
                keyboardType="email-address" 
              />
            </View> 
          </View>
          <View style={styles.containerAction}>
            <TouchableOpacity
              style={styles.button} 
              onPress={() => createAccountHandler({ firstName, email, password })} 
            >
              <Text style={styles.textButton}>CREATE ACCOUNT</Text>
            </TouchableOpacity>
            <Button title="I have account" onPress={() => onChangeUserAlready(!userAlready)}/>
          </View>
        </View>
    );
  }

  const Auth = () => userAlready ? <Login /> : <CreateAccount />

  return (
    <Auth />
  )
}

const styles = StyleSheet.create({
  containerInfo: {
    width: '100%',
    height: '60%',
    paddingTop: 25,
    paddingBottom: 25,
    paddingHorizontal: 15,
    marginTop: 'auto',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
  },
  containerInputInfo: {
    width: '100%',
    height: '60%',
    marginBottom: 'auto',
    marginTop: 'auto',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  inputDecoration: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    alignItems: 'center'
  },
  textInput: {
    width: '90%',
    padding: 15,
  },
  containerAction: {
    width: '100%',
    marginTop: 'auto',
    alignItems: 'center',
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