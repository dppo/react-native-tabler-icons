import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgStairsDown = (props: SvgProps) => (
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
    <Path d="M4 20h4v-4h4v-4h4v-4h4" />
    <Path d="M11 4l-7 7v-4m4 4h-4" />
  </Svg>
);
export default SvgStairsDown;
