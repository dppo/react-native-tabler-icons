import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsDiagonalMinimize2 = (props: SvgProps) => (
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
    <Path d="M18 10h-4v-4" />
    <Path d="M20 4l-6 6" />
    <Path d="M6 14h4v4" />
    <Path d="M10 14l-6 6" />
  </Svg>
);
export default SvgArrowsDiagonalMinimize2;
