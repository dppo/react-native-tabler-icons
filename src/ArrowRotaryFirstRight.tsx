import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowRotaryFirstRight = (props: SvgProps) => (
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
    <Path d="M10.5 9.5l8.5 8.5" />
    <Path d="M14 18h5v-5" />
  </Svg>
);
export default SvgArrowRotaryFirstRight;
