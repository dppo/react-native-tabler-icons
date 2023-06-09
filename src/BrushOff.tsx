import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrushOff = (props: SvgProps) => (
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
    <Path d="M3 17a4 4 0 1 1 4 4h-4v-4z" />
    <Path d="M21 3a16 16 0 0 0 -9.309 4.704m-1.795 2.212a15.993 15.993 0 0 0 -1.696 3.284" />
    <Path d="M21 3a16 16 0 0 1 -4.697 9.302m-2.195 1.786a15.993 15.993 0 0 1 -3.308 1.712" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgBrushOff;
