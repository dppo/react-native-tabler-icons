import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgIdBadgeOff = (props: SvgProps) => (
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
    <Path d="M7.141 3.125a3 3 0 0 1 .859 -.125h8a3 3 0 0 1 3 3v9m-.13 3.874a3 3 0 0 1 -2.87 2.126h-8a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 .128 -.869" />
    <Path d="M11.179 11.176a2 2 0 1 0 2.635 2.667" />
    <Path d="M10 6h4" />
    <Path d="M9 18h6" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgIdBadgeOff;
