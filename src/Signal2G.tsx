import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSignal2G = (props: SvgProps) => (
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
    <Path d="M19 8h-3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3v-4h-1" />
    <Path d="M5 8h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h4" />
  </Svg>
);
export default SvgSignal2G;
