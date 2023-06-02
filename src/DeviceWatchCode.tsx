import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceWatchCode = (props: SvgProps) => (
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
    <Path d="M11 18h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v4" />
    <Path d="M20 21l2 -2l-2 -2" />
    <Path d="M17 17l-2 2l2 2" />
    <Path d="M9 18v3h3" />
    <Path d="M9 6v-3h6v3" />
  </Svg>
);
export default SvgDeviceWatchCode;
