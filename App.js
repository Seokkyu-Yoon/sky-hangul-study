/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {BackHandler, SafeAreaView, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {router, RouterView} from './router';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  BackHandler.addEventListener('hardwareBackPress', router.back.bind(router));

  return (
    <SafeAreaView style={backgroundStyle}>
      <RouterView />
    </SafeAreaView>
  );
};

export default App;
