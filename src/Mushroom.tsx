import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMushroom = (props: SvgProps) => (
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
    <Path d="M20 11.1c0 -4.474 -3.582 -8.1 -8 -8.1s-8 3.626 -8 8.1a.9 .9 0 0 0 .9 .9h14.2a.9 .9 0 0 0 .9 -.9z" />
    <Path d="M10 12v7a2 2 0 1 0 4 0v-7" />
  </Svg>
);
export default SvgMushroom;
