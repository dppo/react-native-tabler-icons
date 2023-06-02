import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsUpLeft = (props: SvgProps) => (
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
    <Path d="M21 7l-4 -4l-4 4" />
    <Path d="M17 3v11a3 3 0 0 1 -3 3h-11" />
    <Path d="M7 13l-4 4l4 4" />
  </Svg>
);
export default SvgArrowsUpLeft;
