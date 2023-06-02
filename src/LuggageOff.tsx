import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLuggageOff = (props: SvgProps) => (
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
    <Path d="M10 6h6a2 2 0 0 1 2 2v6m0 4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-10c0 -.546 .218 -1.04 .573 -1.4" />
    <Path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1" />
    <Path d="M6 10h4m4 0h4" />
    <Path d="M6 16h10" />
    <Path d="M9 20v1" />
    <Path d="M15 20v1" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgLuggageOff;
