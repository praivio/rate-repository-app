import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import theme from '../theme';

const AppBarTab = (props) => {
  const onPress = () => {};

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.text}>AppBarTab</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'flex-start',
    padding: 10,
  },
  text: {
    color: theme.colors.textSecondary,
    fontSize: 17,
    fontWeight: '700',
  },
});

export default AppBarTab;
