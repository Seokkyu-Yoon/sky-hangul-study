import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const TAG = '[components/MainButton]';
export const MainButton = props => {
  const {onPress, children} = props;

  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 80,
    height: 80,
    padding: 10,
    margin: 10,
    backgroundColor: '#ddd',
  },
});
