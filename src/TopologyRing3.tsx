import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTopologyRing3 = (props: SvgProps) => (
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
    <Path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M6 8v8" />
    <Path d="M18 16v-8" />
    <Path d="M8 6h8" />
    <Path d="M16 18h-8" />
  </Svg>
);
export default SvgTopologyRing3;
