import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgElevator = (props: SvgProps) => (
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
    <Path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
    <Path d="M10 10l2 -2l2 2" />
    <Path d="M10 14l2 2l2 -2" />
  </Svg>
);
export default SvgElevator;
