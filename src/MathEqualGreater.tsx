import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMathEqualGreater = (props: SvgProps) => (
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
    <Path d="M5 18l14 -4" />
    <Path d="M5 14l14 -4l-14 -4" />
  </Svg>
);
export default SvgMathEqualGreater;
