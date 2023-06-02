import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowSharpTurnRight = (props: SvgProps) => (
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
    <Path d="M7 18v-11.31a.7 .7 0 0 1 1.195 -.495l9.805 9.805" />
    <Path d="M13 16h5v-5" />
  </Svg>
);
export default SvgArrowSharpTurnRight;
