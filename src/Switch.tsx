import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSwitch = (props: SvgProps) => (
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
    <Path d="M15 4l4 0l0 4" />
    <Path d="M14.75 9.25l4.25 -5.25" />
    <Path d="M5 19l4 -4" />
    <Path d="M15 19l4 0l0 -4" />
    <Path d="M5 5l14 14" />
  </Svg>
);
export default SvgSwitch;
