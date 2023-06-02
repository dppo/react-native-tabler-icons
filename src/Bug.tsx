import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBug = (props: SvgProps) => (
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
    <Path d="M9 9v-1a3 3 0 0 1 6 0v1" />
    <Path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3" />
    <Path d="M3 13l4 0" />
    <Path d="M17 13l4 0" />
    <Path d="M12 20l0 -6" />
    <Path d="M4 19l3.35 -2" />
    <Path d="M20 19l-3.35 -2" />
    <Path d="M4 7l3.75 2.4" />
    <Path d="M20 7l-3.75 2.4" />
  </Svg>
);
export default SvgBug;
