import React from 'react';
import Text from './Text';
import theme from '../theme';
import { StyleSheet } from 'react-native';

const LanguageLabel = ({ language }) => {
  return (
    <Text fontWeight="bold" style={styles.text}>
      {language}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    padding: 6,
    alignSelf: 'flex-start',
    borderRadius: 3,
  },
});

export default LanguageLabel;
