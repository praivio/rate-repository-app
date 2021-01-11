import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Text from './Text';
import LanguageLabel from './LanguageLabel';
import theme from '../theme';
import MetricItem from './MetricItem';

const RepositoryItem = ({ item }) => {
  const {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
  } = item;
  return (
    <View style={styles.itemContainer}>
      <View style={styles.dataContainer}>
        <View>
          <Image
            style={styles.avatar}
            source={{
              uri: ownerAvatarUrl,
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text fontSize="subheading" fontWeight="bold">
            {fullName}
          </Text>
          <Text color="textSecondary">{description}</Text>
          <LanguageLabel language={language} />
        </View>
      </View>
      <View style={styles.metricContainer}>
        <MetricItem label="Stars" value={stargazersCount} />
        <MetricItem label="Forks" value={forksCount} />
        <MetricItem label="Reviews" value={reviewCount} />
        <MetricItem label="Rating" value={ratingAverage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 5,
    backgroundColor: theme.colors.itemBackgroundColor,
  },
  dataContainer: {
    flexDirection: 'row',
  },
  textContainer: {
    margin: 10,
  },
  metricContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  avatar: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 5,
  },
});

export default RepositoryItem;
