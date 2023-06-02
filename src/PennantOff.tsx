import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPennantOff = (props: SvgProps) => (
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
    <Path d="M8 21h4" />
    <Path d="M10 21v-11m0 -4v-3" />
    <Path d="M10 4l9 4l-4.858 2.16m-2.764 1.227l-1.378 .613" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgPennantOff;
