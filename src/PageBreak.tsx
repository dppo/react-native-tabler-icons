import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPageBreak = (props: SvgProps) => (
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
    <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <Path d="M19 18v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1" />
    <Path d="M3 14h3m4.5 0h3m4.5 0h3" />
    <Path d="M5 10v-5a2 2 0 0 1 2 -2h7l5 5v2" />
  </Svg>
);
export default SvgPageBreak;
