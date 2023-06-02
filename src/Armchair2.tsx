import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArmchair2 = (props: SvgProps) => (
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
    <Path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" />
    <Path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2" />
    <Path d="M8 12h8" />
    <Path d="M7 19v2" />
    <Path d="M17 19v2" />
  </Svg>
);
export default SvgArmchair2;
