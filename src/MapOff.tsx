import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMapOff = (props: SvgProps) => (
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
    <Path d="M8.32 4.34l.68 -.34l6 3l6 -3v13m-2.67 1.335l-3.33 1.665l-6 -3l-6 3v-13l2.665 -1.333" />
    <Path d="M9 4v1m0 4v8" />
    <Path d="M15 7v4m0 4v5" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgMapOff;
