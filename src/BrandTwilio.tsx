import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandTwilio = (props: SvgProps) => (
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
    <Path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" />
    <Path d="M9 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M15 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M9 15m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </Svg>
);
export default SvgBrandTwilio;
