import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHttpGet = (props: SvgProps) => (
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
    <Path d="M7 8h-2a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2v-4h-1" />
    <Path d="M14 8h-4v8h4" />
    <Path d="M10 12h2.5" />
    <Path d="M17 8h4" />
    <Path d="M19 8v8" />
  </Svg>
);
export default SvgHttpGet;
