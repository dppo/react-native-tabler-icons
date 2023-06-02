import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDisabledOff = (props: SvgProps) => (
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
    <Path d="M11 7a2 2 0 1 0 -2 -2" />
    <Path d="M11 11v4h4l4 5" />
    <Path d="M15 11h1" />
    <Path d="M7 11.5a5 5 0 1 0 6 7.5" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgDisabledOff;
