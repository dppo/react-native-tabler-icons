import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMilitaryRank = (props: SvgProps) => (
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
    <Path d="M17 7v13h-10v-13l5 -3z" />
    <Path d="M10 13l2 -1l2 1" />
    <Path d="M10 17l2 -1l2 1" />
    <Path d="M10 9l2 -1l2 1" />
  </Svg>
);
export default SvgMilitaryRank;
