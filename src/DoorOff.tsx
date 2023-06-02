import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDoorOff = (props: SvgProps) => (
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
    <Path d="M3 21h18" />
    <Path d="M6 21v-15" />
    <Path d="M7.18 3.175c.25 -.112 .528 -.175 .82 -.175h8a2 2 0 0 1 2 2v9" />
    <Path d="M18 18v3" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgDoorOff;
