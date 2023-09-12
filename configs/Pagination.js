import {StyleSheet, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import colors from './colors';

const Pagination = ({data, x, screenWidth}) => {
  const PaginationComp = ({i}) => {
    const animatedDotStyle = useAnimatedStyle(() => {
      const widthAnimation = interpolate(
        x.value,
        [(i - 1) * screenWidth, i * screenWidth, (i + 1) * screenWidth],
        [10, 20, 10],
        Extrapolate.CLAMP,
      );
      const opacityAnimation = interpolate(
        x.value,
        [(i - 1) * screenWidth, i * screenWidth, (i + 1) * screenWidth],
        [0.5, 1, 0.5],
        Extrapolate.CLAMP,
      );
      return {
        width: widthAnimation,
        opacity: opacityAnimation,
      };
    });
    return <Animated.View style={[styles.dots, animatedDotStyle]} />;
  };

  return (
    <View style={styles.paginationContainer}>
      {data.map((_, i) => {
        return <PaginationComp i={i} key={i} />;
      })}
    </View>
  );
  
};
export default Pagination;

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    // borderColor: 'red',
    // borderWidth: 2,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dots: {
    height: 10,
    backgroundColor: colors.primary,
    marginHorizontal: 10,
    borderRadius: 5,
  },
});