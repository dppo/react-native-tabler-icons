import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHdr = (props: SvgProps) => (
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
    <Path d="M3 16v-8" />
    <Path d="M7 8v8" />
    <Path d="M3 12h4" />
    <Path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z" />
    <Path d="M17 12h2a2 2 0 1 0 0 -4h-2v8m4 0l-3 -4" />
  </Svg>
);
export default SvgHdr;
