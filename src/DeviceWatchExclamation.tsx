import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceWatchExclamation = (props: SvgProps) => (
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
    <Path d="M15 18h-6a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v3" />
    <Path d="M9 18v3h6v-3" />
    <Path d="M9 6v-3h6v3" />
    <Path d="M19 16v3" />
    <Path d="M19 22v.01" />
  </Svg>
);
export default SvgDeviceWatchExclamation;
