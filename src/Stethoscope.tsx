import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgStethoscope = (props: SvgProps) => (
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
    <Path d="M6 4h-1a2 2 0 0 0 -2 2v3.5h0a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" />
    <Path d="M8 15a6 6 0 1 0 12 0v-3" />
    <Path d="M11 3v2" />
    <Path d="M6 3v2" />
    <Path d="M20 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  </Svg>
);
export default SvgStethoscope;
