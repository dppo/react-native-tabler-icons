import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceDesktopOff = (props: SvgProps) => (
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
    <Path d="M8 4h12a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1m-4 0h-12a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1" />
    <Path d="M7 20h10" />
    <Path d="M9 16v4" />
    <Path d="M15 16v4" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgDeviceDesktopOff;
