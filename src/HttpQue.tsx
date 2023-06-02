import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHttpQue = (props: SvgProps) => (
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
    <Path d="M6 15l1 1" />
    <Path d="M21 8h-4v8h4" />
    <Path d="M17 12h2.5" />
    <Path d="M10 8v6a2 2 0 1 0 4 0v-6" />
  </Svg>
);
export default SvgHttpQue;
