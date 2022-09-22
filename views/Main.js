import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';

import {MainButton} from '../components/MainButton';

const TAG = '[views/Main]';

export const Main = props => {
  const {router} = props;

  const onPressBoard = () => {
    router.to('board');
  };

  const onPressQuiz = () => {
    router.to('quiz');
  };

  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.title}>한글 공부</Text>
      <View style={styles.menus}>
        <MainButton onPress={onPressBoard}>
          <Text style={styles.menuText}>목록</Text>
        </MainButton>
        <MainButton onPress={onPressQuiz}>
          <Text style={styles.menuText}>퀴즈</Text>
        </MainButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  menus: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  menuText: {
    color: '#000',
  },
});
