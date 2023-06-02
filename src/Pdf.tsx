import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPdf = (props: SvgProps) => (
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
    <Path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z" />
    <Path d="M3 12h2a2 2 0 1 0 0 -4h-2v8" />
    <Path d="M17 12h3" />
    <Path d="M21 8h-4v8" />
  </Svg>
);
export default SvgPdf;
