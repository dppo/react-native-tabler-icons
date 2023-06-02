import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSmoking = (props: SvgProps) => (
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
    <Path d="M3 13m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
    <Path d="M8 13l0 4" />
    <Path d="M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5" />
  </Svg>
);
export default SvgSmoking;
