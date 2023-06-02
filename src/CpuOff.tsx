import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCpuOff = (props: SvgProps) => (
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
    <Path d="M9 5h9a1 1 0 0 1 1 1v9m-.292 3.706a1 1 0 0 1 -.708 .294h-12a1 1 0 0 1 -1 -1v-12c0 -.272 .108 -.518 .284 -.698" />
    <Path d="M13 9h2v2m0 4h-6v-6" />
    <Path d="M3 10h2" />
    <Path d="M3 14h2" />
    <Path d="M10 3v2" />
    <Path d="M14 3v2" />
    <Path d="M21 10h-2" />
    <Path d="M21 14h-2" />
    <Path d="M14 21v-2" />
    <Path d="M10 21v-2" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgCpuOff;
