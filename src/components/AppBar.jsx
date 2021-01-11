import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.appBar,
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
});

export default AppBar;
