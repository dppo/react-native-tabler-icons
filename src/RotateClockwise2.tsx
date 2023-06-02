import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRotateClockwise2 = (props: SvgProps) => (
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
    <Path d="M9 4.55a8 8 0 0 1 6 14.9m0 -4.45v5h5" />
    <Path d="M5.63 7.16l0 .01" />
    <Path d="M4.06 11l0 .01" />
    <Path d="M4.63 15.1l0 .01" />
    <Path d="M7.16 18.37l0 .01" />
    <Path d="M11 19.94l0 .01" />
  </Svg>
);
export default SvgRotateClockwise2;
