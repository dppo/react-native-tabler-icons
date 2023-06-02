import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBellPause = (props: SvgProps) => (
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
    <Path d="M13 17h-9a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2" />
    <Path d="M9 17v1a3 3 0 0 0 4.022 2.821" />
    <Path d="M17 17v5" />
    <Path d="M21 17v5" />
  </Svg>
);
export default SvgBellPause;
