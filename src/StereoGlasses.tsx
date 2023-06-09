import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgStereoGlasses = (props: SvgProps) => (
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
    <Path d="M8 3h-2l-3 9" />
    <Path d="M16 3h2l3 9" />
    <Path d="M3 12v7a1 1 0 0 0 1 1h4.586a1 1 0 0 0 .707 -.293l2 -2a1 1 0 0 1 1.414 0l2 2a1 1 0 0 0 .707 .293h4.586a1 1 0 0 0 1 -1v-7h-18z" />
    <Path d="M7 16h1" />
    <Path d="M16 16h1" />
  </Svg>
);
export default SvgStereoGlasses;
