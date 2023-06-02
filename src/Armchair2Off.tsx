import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArmchair2Off = (props: SvgProps) => (
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
    <Path d="M5 10v-4a3 3 0 0 1 .128 -.869m2.038 -2.013c.264 -.078 .544 -.118 .834 -.118h8a3 3 0 0 1 3 3v4" />
    <Path d="M16.124 12.145a3 3 0 1 1 3.756 3.724m-.88 3.131h-14v-3a3 3 0 1 1 3 -3v2" />
    <Path d="M8 12h4" />
    <Path d="M7 19v2" />
    <Path d="M17 19v2" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgArmchair2Off;
