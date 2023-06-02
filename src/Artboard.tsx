import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArtboard = (props: SvgProps) => (
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
    <Path d="M8 8m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z" />
    <Path d="M3 8l1 0" />
    <Path d="M3 16l1 0" />
    <Path d="M8 3l0 1" />
    <Path d="M16 3l0 1" />
    <Path d="M20 8l1 0" />
    <Path d="M20 16l1 0" />
    <Path d="M8 20l0 1" />
    <Path d="M16 20l0 1" />
  </Svg>
);
export default SvgArtboard;
