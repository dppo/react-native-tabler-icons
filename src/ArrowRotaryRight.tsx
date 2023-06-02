import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowRotaryRight = (props: SvgProps) => (
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
    <Path d="M8 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M8 10v10" />
    <Path d="M17 11l4 -4l-4 -4" />
    <Path d="M11 7h10" />
  </Svg>
);
export default SvgArrowRotaryRight;
