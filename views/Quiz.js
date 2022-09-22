import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';

import {QuizRead} from '../components/QuizRead';
import {QuizWrite} from '../components/QuizWrite';

const TAG = '[views/Quiz]';

export const Quiz = props => {
  const [difficulty, setDifficulty] = useState('read');
  const isRead = difficulty === 'read';
  const isWrite = difficulty === 'write';

  return (
    <SafeAreaView style={styles.quiz}>
      <View style={styles.tabWrap}>
        <TouchableHighlight
          onPress={() => setDifficulty('read')}
          style={[styles.tabBtn, isRead && styles.tabBtnActive]}>
          <Text style={[styles.tabBtnText, isRead && styles.tabBtnTextActive]}>
            읽기
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => setDifficulty('write')}
          style={[styles.tabBtn, isWrite && styles.tabBtnActive]}>
          <Text style={[styles.tabBtnText, isWrite && styles.tabBtnTextActive]}>
            쓰기
          </Text>
        </TouchableHighlight>
      </View>
      {isRead && <QuizRead />}
      {isWrite && <QuizWrite />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  quiz: {
    disaply: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  tabWrap: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  tabBtn: {
    marginHorizontal: 1,
    backgroundColor: '#ddd',
    padding: 10,
    fontWeight: 'bold',
  },
  tabBtnActive: {
    backgroundColor: '#555',
  },
  tabBtnText: {
    color: '#000',
  },
  tabBtnTextActive: {
    color: '#fff',
  },
});
