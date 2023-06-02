import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMultiplier15X = (props: SvgProps) => (
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
    <Path d="M4 16v-8l-2 2" />
    <Path d="M10 16h2a2 2 0 1 0 0 -4h-2v-4h4" />
    <Path d="M7 16v.01" />
    <Path d="M17 16l4 -4" />
    <Path d="M21 16l-4 -4" />
  </Svg>
);
export default SvgMultiplier15X;
