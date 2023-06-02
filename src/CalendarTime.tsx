import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCalendarTime = (props: SvgProps) => (
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
    <Path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
    <Path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <Path d="M15 3v4" />
    <Path d="M7 3v4" />
    <Path d="M3 11h16" />
    <Path d="M18 16.496v1.504l1 1" />
  </Svg>
);
export default SvgCalendarTime;
