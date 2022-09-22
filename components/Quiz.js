import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {modelConsonants, modelVowels, modelWords} from '../model';

export const Quiz = props => {
  const {answerVisible, consonantIdx, vowelIdx, onPress} = props;

  return (
    <View style={styles.quiz}>
      <Text style={styles.header}>
        {`${modelConsonants[consonantIdx]} + ${modelVowels[vowelIdx]}`}
      </Text>
      <Text style={styles.answer}>
        {answerVisible ? modelWords[consonantIdx][vowelIdx] : '?'}
      </Text>
      <View>
        {answerVisible ? (
          <Button title="퀴즈풀기" onPress={onPress} />
        ) : (
          <Button title="정답보기" onPress={onPress} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quiz: {
    flex: 1,
    disaply: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#000',
  },
  answer: {
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 100,
    color: '#000',
  },
});
