import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHttpPatch = (props: SvgProps) => (
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
    <Path d="M3 12h2a2 2 0 1 0 0 -4h-2v8" />
    <Path d="M10 16v-6a2 2 0 1 1 4 0v6" />
    <Path d="M10 13h4" />
    <Path d="M17 8h4" />
    <Path d="M19 8v8" />
  </Svg>
);
export default SvgHttpPatch;
