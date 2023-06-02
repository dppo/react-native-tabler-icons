import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgQrcodeOff = (props: SvgProps) => (
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
    <Path d="M8 4h1a1 1 0 0 1 1 1v1m-.297 3.711a1 1 0 0 1 -.703 .289h-4a1 1 0 0 1 -1 -1v-4c0 -.275 .11 -.524 .29 -.705" />
    <Path d="M7 17v.01" />
    <Path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
    <Path d="M7 7v.01" />
    <Path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
    <Path d="M17 7v.01" />
    <Path d="M20 14v.01" />
    <Path d="M14 14v3" />
    <Path d="M14 20h3" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgQrcodeOff;
