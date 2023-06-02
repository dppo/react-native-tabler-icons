import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRotate2 = (props: SvgProps) => (
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
    <Path d="M15 4.55a8 8 0 0 0 -6 14.9m0 -4.45v5h-5" />
    <Path d="M18.37 7.16l0 .01" />
    <Path d="M13 19.94l0 .01" />
    <Path d="M16.84 18.37l0 .01" />
    <Path d="M19.37 15.1l0 .01" />
    <Path d="M19.94 11l0 .01" />
  </Svg>
);
export default SvgRotate2;
