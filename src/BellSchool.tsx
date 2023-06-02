import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBellSchool = (props: SvgProps) => (
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
    <Path d="M10 10m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
    <Path d="M13.5 15h.5a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-1a2 2 0 0 1 2 -2h.5" />
    <Path d="M16 17a5.698 5.698 0 0 0 4.467 -7.932l-.467 -1.068" />
    <Path d="M10 10v.01" />
    <Path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </Svg>
);
export default SvgBellSchool;
