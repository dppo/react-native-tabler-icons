import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMoped = (props: SvgProps) => (
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
    <Path d="M18 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M5 16v1a2 2 0 0 0 4 0v-5h-3a3 3 0 0 0 -3 3v1h10a6 6 0 0 1 5 -4v-5a2 2 0 0 0 -2 -2h-1" />
    <Path d="M6 9l3 0" />
  </Svg>
);
export default SvgMoped;
