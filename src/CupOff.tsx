import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCupOff = (props: SvgProps) => (
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
    <Path d="M8 8h-3v3h6m4 0h4v-3h-7" />
    <Path d="M17.5 11l-.323 2.154m-.525 3.497l-.652 4.349h-8l-1.5 -10" />
    <Path d="M6 8v-1c0 -.296 .064 -.577 .18 -.83m2.82 -1.17h7a2 2 0 0 1 2 2v1" />
    <Path d="M15 5v-2" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgCupOff;
