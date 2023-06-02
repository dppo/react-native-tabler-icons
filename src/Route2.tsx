import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRoute2 = (props: SvgProps) => (
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
    <Path d="M3 17l4 4" />
    <Path d="M7 17l-4 4" />
    <Path d="M17 3l4 4" />
    <Path d="M21 3l-4 4" />
    <Path d="M14 5a2 2 0 0 0 -2 2v10a2 2 0 0 1 -2 2" />
  </Svg>
);
export default SvgRoute2;
