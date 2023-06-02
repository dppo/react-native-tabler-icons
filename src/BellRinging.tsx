import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBellRinging = (props: SvgProps) => (
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
    <Path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
    <Path d="M9 17v1a3 3 0 0 0 6 0v-1" />
    <Path d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
    <Path d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
  </Svg>
);
export default SvgBellRinging;
