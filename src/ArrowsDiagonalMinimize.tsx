import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsDiagonalMinimize = (props: SvgProps) => (
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
    <Path d="M6 10h4v-4" />
    <Path d="M4 4l6 6" />
    <Path d="M18 14h-4v4" />
    <Path d="M14 14l6 6" />
  </Svg>
);
export default SvgArrowsDiagonalMinimize;
