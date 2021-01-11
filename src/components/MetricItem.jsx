import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const roundValue = (value) => {
  if (value < 1000) {
    return value;
  }
  const rounded = (value + 50) / 1000;
  return rounded.toFixed(1) + 'k';
};

const MetricItem = ({ value, label }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold">{roundValue(value)}</Text>
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 64,
  },
});

export default MetricItem;
