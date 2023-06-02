import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBedOff = (props: SvgProps) => (
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
    <Path d="M3 7v11" />
    <Path d="M3 14h11" />
    <Path d="M18 14h3" />
    <Path d="M21 18v-8a2 2 0 0 0 -2 -2h-7" />
    <Path d="M11 11v3" />
    <Path d="M7 10m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgBedOff;
