import React, {useState} from 'react';

import {modelConsonants, modelVowels} from '../model';
import {Quiz} from './Quiz';
const TAG = '[components/QuizWrite]';

const getRandomInt = (max = 1, min = 0) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
const getConsonantIdx = () => {
  return getRandomInt(modelConsonants.length);
};
const getVowelIdx = () => {
  return getRandomInt(modelVowels.length);
};

export const QuizWrite = props => {
  const [answerVisible, setAnswerVisible] = useState(true);
  const [consonantIdx, setConsonantIdx] = useState(0);
  const [vowelIdx, setVowelIdx] = useState(0);

  const onPress = () => {
    if (!answerVisible) {
      setAnswerVisible(true);
      return;
    }
    setAnswerVisible(false);
    setConsonantIdx(getConsonantIdx());
    setVowelIdx(getVowelIdx());
  };

  return (
    <Quiz
      answerVisible={answerVisible}
      consonantIdx={consonantIdx}
      vowelIdx={vowelIdx}
      onPress={onPress}
    />
  );
};
