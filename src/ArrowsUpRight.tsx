import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsUpRight = (props: SvgProps) => (
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
    <Path d="M17 21l4 -4l-4 -4" />
    <Path d="M21 17h-11a3 3 0 0 1 -3 -3v-11" />
    <Path d="M11 7l-4 -4l-4 4" />
  </Svg>
);
export default SvgArrowsUpRight;
