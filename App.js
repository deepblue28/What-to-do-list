import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';
import{ Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

// Web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDm0r2EGdOnn18spYvMTowdIitryv--sIA",
  authDomain: "to-do-list-7e0cf.firebaseapp.com",
  databaseURL: "https://to-do-list-7e0cf.firebaseio.com",
  projectId: "to-do-list-7e0cf",
  storageBucket: "to-do-list-7e0cf.appspot.com",
  messagingSenderId: "426524082004",
  appId: "1:426524082004:web:319924fc065494cbee12c1",
  measurementId: "G-MS2562GBPD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = ({
      email:'',
      password:''
    })
  }

  signUpUser = (email,password) =>{
    try {
      if(this.state.length<8)
      {
        alert("Password can't have less than 8 characters!")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch(error){
      console.log(error.topString())
    }

  }

  LoginUser = (email,password) =>{

  }

  render() {
  return (
    <Container style={styles.container}>
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input 
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(email) => this.setState({ email })} 
          />
        </Item>

        <Item floatingLabel>
          <Label>Password</Label>
          <Input 
          secureTextEntry={true}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={(password) => this.state.email({ password })}
          />
        </Item>

        <Button style={{ marginTop: 12 }}
          full
          rounded
          warning
          onPress={()=> this.LoginUser(this.state.email,this.state.password)}
        >
          <Text style={{ color: 'black' }}>Login</Text>
        </Button>

        <Button style={{ marginTop: 12 }}
          full
          rounded
          primary
          onPress={()=> this.SignUpUser(this.state.email,this.state.password)}
        >
          <Text style={{ color: 'white' }}>Sign Up</Text>
        </Button>

      </Form>
    </Container>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 12,
  },
});
