import React, { useState } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import theme from '../theme';

const AppBarTab = () => {
  const [label, setLabel] = useState('Repositories');

  // Just to see clicking works...
  const onPress = () => {
    setLabel(label + 'o');
  };

  return (
    <Pressable onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    minHeight: 20,
  },
  text: {
    color: theme.colors.textSecondary,
    fontSize: 17,
    fontWeight: '700',
  },
});

export default AppBarTab;
