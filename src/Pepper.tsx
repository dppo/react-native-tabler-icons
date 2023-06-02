import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPepper = (props: SvgProps) => (
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
    <Path d="M13 11c0 2.21 -2.239 4 -5 4s-5 -1.79 -5 -4a8 8 0 1 0 16 0a3 3 0 0 0 -6 0" />
    <Path d="M16 8c0 -2 2 -4 4 -4" />
  </Svg>
);
export default SvgPepper;
