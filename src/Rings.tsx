import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRings = (props: SvgProps) => (
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
    <Path d="M7 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M7 15v-11" />
    <Path d="M17 15v-11" />
    <Path d="M3 4h18" />
  </Svg>
);
export default SvgRings;
