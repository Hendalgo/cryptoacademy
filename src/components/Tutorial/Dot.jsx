import React from 'react';
import Animated, { Extrapolate, interpolate, interpolateNode } from 'react-native-reanimated';

const Dot = ({index, currentIndex}) => {
    const opacity = interpolateNode(
        currentIndex,
        {
            inputRange: [index -1, index,  index +1],
            outputRange: [0.5, 1, 0.5],
            extrapolate: Extrapolate.CLAMP,
        }
    );
    const scale = interpolateNode(currentIndex, {
        inputRange: [index -1, index,  index +1],
        outputRange: [1, 1.25, 1],
        extrapolate: Extrapolate.CLAMP,
    });

  return (
    <Animated.View style={{
        opacity,
        backgroundColor: "#eba721",
        width: 5,
        height: 5,
        borderRadius: 50,
        margin: 5,
        transform: [{scale}]
    }}>

    </Animated.View>
  )
}

export default Dot;