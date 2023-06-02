import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSwordOff = (props: SvgProps) => (
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
    <Path d="M11.938 7.937l3.062 -3.937h5v5l-3.928 3.055m-2.259 1.757l-2.813 2.188l-4 4l-3 -3l4 -4l2.19 -2.815" />
    <Path d="M6.5 11.5l6 6" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgSwordOff;
