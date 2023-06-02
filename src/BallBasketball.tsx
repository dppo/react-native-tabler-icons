import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBallBasketball = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    <Path d="M5.65 5.65l12.7 12.7" />
    <Path d="M5.65 18.35l12.7 -12.7" />
    <Path d="M12 3a9 9 0 0 0 9 9" />
    <Path d="M3 12a9 9 0 0 1 9 9" />
  </Svg>
);
export default SvgBallBasketball;
