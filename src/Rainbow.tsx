import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRainbow = (props: SvgProps) => (
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
    <Path d="M22 17c0 -5.523 -4.477 -10 -10 -10s-10 4.477 -10 10" />
    <Path d="M18 17a6 6 0 1 0 -12 0" />
    <Path d="M14 17a2 2 0 1 0 -4 0" />
  </Svg>
);
export default SvgRainbow;
