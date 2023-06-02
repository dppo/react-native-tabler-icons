import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBattery4 = (props: SvgProps) => (
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
    <Path d="M6 7h11a2 2 0 0 1 2 2v.5a.5 .5 0 0 0 .5 .5a.5 .5 0 0 1 .5 .5v3a.5 .5 0 0 1 -.5 .5a.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-11a2 2 0 0 1 -2 -2v-6a2 2 0 0 1 2 -2" />
    <Path d="M7 10l0 4" />
    <Path d="M10 10l0 4" />
    <Path d="M13 10l0 4" />
    <Path d="M16 10l0 4" />
  </Svg>
);
export default SvgBattery4;
