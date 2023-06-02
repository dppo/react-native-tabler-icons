import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHttpTrace = (props: SvgProps) => (
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
    <Path d="M3 8h4" />
    <Path d="M5 8v8" />
    <Path d="M10 12h2a2 2 0 1 0 0 -4h-2v8m4 0l-3 -4" />
    <Path d="M17 16v-6a2 2 0 1 1 4 0v6" />
    <Path d="M17 13h4" />
  </Svg>
);
export default SvgHttpTrace;
