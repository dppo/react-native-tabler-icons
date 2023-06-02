import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTopologyRing2 = (props: SvgProps) => (
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
    <Path d="M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M7 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M21 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <Path d="M7 18h10" />
    <Path d="M18 16l-5 -8" />
    <Path d="M11 8l-5 8" />
  </Svg>
);
export default SvgTopologyRing2;
