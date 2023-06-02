import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHttpOptions = (props: SvgProps) => (
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
    <Path d="M5 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" />
    <Path d="M10 12h2a2 2 0 1 0 0 -4h-2v8" />
    <Path d="M17 8h4" />
    <Path d="M19 8v8" />
  </Svg>
);
export default SvgHttpOptions;
