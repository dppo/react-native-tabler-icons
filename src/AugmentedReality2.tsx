import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAugmentedReality2 = (props: SvgProps) => (
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
    <Path d="M10 21h-2a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3.5" />
    <Path d="M17 17l-4 -2.5l4 -2.5l4 2.5v4.5l-4 2.5z" />
    <Path d="M13 14.5v4.5l4 2.5" />
    <Path d="M17 17l4 -2.5" />
    <Path d="M11 4h2" />
  </Svg>
);
export default SvgAugmentedReality2;
