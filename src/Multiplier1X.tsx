import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMultiplier1X = (props: SvgProps) => (
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
    <Path d="M9 16v-8l-2 2" />
    <Path d="M13 16l4 -4" />
    <Path d="M17 16l-4 -4" />
  </Svg>
);
export default SvgMultiplier1X;
