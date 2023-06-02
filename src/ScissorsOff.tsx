import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgScissorsOff = (props: SvgProps) => (
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
    <Path d="M4.432 4.442a3 3 0 1 0 4.114 4.146" />
    <Path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M8.6 15.4l3.4 -3.4m2 -2l5 -5" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgScissorsOff;
