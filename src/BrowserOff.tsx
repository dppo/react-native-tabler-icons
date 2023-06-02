import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrowserOff = (props: SvgProps) => (
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
    <Path d="M8 4h11a1 1 0 0 1 1 1v11m-.288 3.702a1 1 0 0 1 -.712 .298h-14a1 1 0 0 1 -1 -1v-14c0 -.276 .112 -.526 .293 -.707" />
    <Path d="M4 8h4m4 0h8" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgBrowserOff;
