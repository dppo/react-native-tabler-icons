import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDevicesShare = (props: SvgProps) => (
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
    <Path d="M13 15v-6a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v4" />
    <Path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h9" />
    <Path d="M16 22l5 -5" />
    <Path d="M21 21.5v-4.5h-4.5" />
    <Path d="M16 9h2" />
  </Svg>
);
export default SvgDevicesShare;
