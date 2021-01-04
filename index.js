import React from 'react';
import {AppRegistry } from 'react-native';
import Header from './src/component/HomeScreen';


const App = () =>  (
     <Header headerTaxt={'App'}/>
    );


AppRegistry.registerComponent('album',() => App);

