import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMountainOff = (props: SvgProps) => (
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
    <Path d="M18.281 14.26l-4.201 -8.872a2.3 2.3 0 0 0 -4.158 0l-.165 .349m-1.289 2.719l-5.468 11.544h17" />
    <Path d="M7.5 11l2 2.5l2 -2" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgMountainOff;
