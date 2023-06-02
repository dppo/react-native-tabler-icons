import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAbacus = (props: SvgProps) => (
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
    <Path d="M5 3v18" />
    <Path d="M19 21v-18" />
    <Path d="M5 7h14" />
    <Path d="M5 15h14" />
    <Path d="M8 13v4" />
    <Path d="M11 13v4" />
    <Path d="M16 13v4" />
    <Path d="M14 5v4" />
    <Path d="M11 5v4" />
    <Path d="M8 5v4" />
    <Path d="M3 21h18" />
  </Svg>
);
export default SvgAbacus;
