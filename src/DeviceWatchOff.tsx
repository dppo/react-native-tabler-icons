import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceWatchOff = (props: SvgProps) => (
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
    <Path d="M10 6h5a3 3 0 0 1 3 3v5m-.89 3.132a2.99 2.99 0 0 1 -2.11 .868h-6a3 3 0 0 1 -3 -3v-6c0 -.817 .327 -1.559 .857 -2.1" />
    <Path d="M9 18v3h6v-3" />
    <Path d="M9 5v-2h6v3" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgDeviceWatchOff;
