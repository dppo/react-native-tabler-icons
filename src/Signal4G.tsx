import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSignal4G = (props: SvgProps) => (
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
    <Path d="M6 8v3a1 1 0 0 0 1 1h3" />
    <Path d="M10 8v8" />
    <Path d="M17 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
  </Svg>
);
export default SvgSignal4G;
