import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPng = (props: SvgProps) => (
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
    <Path d="M21 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
    <Path d="M3 16v-8h2a2 2 0 1 1 0 4h-2" />
    <Path d="M10 16v-8l4 8v-8" />
  </Svg>
);
export default SvgPng;
