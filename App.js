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
  render() {
  return (
    <Container style={styles.container}>
      <Form>
        <Item>
          <Label>Email</Label>
          <Input autoCorrect={false}
                 autoCapitalize="none"
          />
        </Item>

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
  },
});
