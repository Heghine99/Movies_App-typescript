import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

type sizeType = {
  size: number | undefined;
};

const Loading = ({size}: sizeType) => (
  <View style={[styles.container, styles.horizontal, styles.activityIndicator]}>
    <ActivityIndicator size={size} color="#CEA8A0" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  activityIndicator: {},
});

export default Loading;
