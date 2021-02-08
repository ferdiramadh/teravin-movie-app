import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import axios from "axios";
import {Provider} from 'react-redux'
import {store} from './src/redux'
import Main from './src/components/Main'


export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Main />        
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
