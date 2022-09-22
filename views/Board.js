import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import {modelConsonants, modelVowels, modelWords} from '../model';

const TAG = '[views/Board]';

const boardItems = [
  [' ', ...modelVowels],
  ...modelConsonants.map((consonant, i) => [consonant, ...modelWords[i]]),
];

const Item = props => {
  const {item} = props;
  return <Text style={styles.item}>{item}</Text>;
};

const Row = props => {
  const {items} = props;
  return (
    <View style={styles.row}>
      {items.map((item, i) => (
        <Item item={item} key={i} />
      ))}
    </View>
  );
};

export const Board = props => {
  return (
    <SafeAreaView style={styles.board}>
      {boardItems.map((items, i) => (
        <Row items={items} key={i} />
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  board: {
    width: '100%',
    height: '100%',
    disaply: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
});
