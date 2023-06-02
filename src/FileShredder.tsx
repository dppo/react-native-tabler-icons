import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFileShredder = (props: SvgProps) => (
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
    <Path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
    <Path d="M3 12l18 0" />
    <Path d="M6 16l0 2" />
    <Path d="M10 16l0 6" />
    <Path d="M14 16l0 2" />
    <Path d="M18 16l0 4" />
  </Svg>
);
export default SvgFileShredder;
