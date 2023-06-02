import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCodeOff = (props: SvgProps) => (
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
    <Path d="M7 8l-4 4l4 4" />
    <Path d="M17 8l4 4l-2.5 2.5" />
    <Path d="M14 4l-1.201 4.805m-.802 3.207l-2 7.988" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgCodeOff;
