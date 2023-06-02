import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgShoeOff = (props: SvgProps) => (
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
    <Path d="M13.846 9.868l4.08 .972a4 4 0 0 1 3.074 3.89v2.27m-3 1h-14a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h2" />
    <Path d="M8 18v-1a4 4 0 0 0 -4 -4h-1" />
    <Path d="M10 12l.663 -1.327" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgShoeOff;
