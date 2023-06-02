import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCarTurbine = (props: SvgProps) => (
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
    <Path d="M11 13m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <Path d="M18.86 11c.088 .66 .14 1.512 .14 2a8 8 0 1 1 -8 -8h6" />
    <Path d="M11 9c2.489 .108 4.489 .108 6 0" />
    <Path d="M17 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
    <Path d="M11 13l-3.5 -1.5" />
    <Path d="M11 13l2.5 3" />
    <Path d="M8.5 16l2.5 -3" />
    <Path d="M11 13l3.5 -1.5" />
    <Path d="M11 9v4" />
  </Svg>
);
export default SvgCarTurbine;
