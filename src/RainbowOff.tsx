import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRainbowOff = (props: SvgProps) => (
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
    <Path d="M22 17c0 -5.523 -4.477 -10 -10 -10c-.308 0 -.613 .014 -.914 .041m-3.208 .845a10 10 0 0 0 -5.878 9.114" />
    <Path d="M11.088 11.069a6 6 0 0 0 -5.088 5.931" />
    <Path d="M14 17a2 2 0 1 0 -4 0" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgRainbowOff;
