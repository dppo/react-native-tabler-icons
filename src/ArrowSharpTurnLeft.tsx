import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowSharpTurnLeft = (props: SvgProps) => (
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
    <Path d="M17 18v-11.31a.7 .7 0 0 0 -1.195 -.495l-9.805 9.805" />
    <Path d="M11 16h-5v-5" />
  </Svg>
);
export default SvgArrowSharpTurnLeft;
