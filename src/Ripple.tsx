import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRipple = (props: SvgProps) => (
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
    <Path d="M3 7c3 -2 6 -2 9 0s6 2 9 0" />
    <Path d="M3 17c3 -2 6 -2 9 0s6 2 9 0" />
    <Path d="M3 12c3 -2 6 -2 9 0s6 2 9 0" />
  </Svg>
);
export default SvgRipple;
