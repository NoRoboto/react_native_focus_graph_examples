/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View
} from 'react-native';
import ModalHandler from './src/modalHandler';

const App: () => React$Node = () => {
  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <ModalHandler />
    </View>
  );
};

export default App;
