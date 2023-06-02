import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDoor = (props: SvgProps) => (
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
    <Path d="M14 12v.01" />
    <Path d="M3 21h18" />
    <Path d="M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16" />
  </Svg>
);
export default SvgDoor;
