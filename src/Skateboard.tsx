import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSkateboard = (props: SvgProps) => (
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
    <Path d="M7 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M17 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1" />
  </Svg>
);
export default SvgSkateboard;
