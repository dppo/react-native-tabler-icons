import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceDesktopX = (props: SvgProps) => (
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
    <Path d="M13 16h-9a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
    <Path d="M7 20h6.5" />
    <Path d="M9 16v4" />
    <Path d="M22 22l-5 -5" />
    <Path d="M17 22l5 -5" />
  </Svg>
);
export default SvgDeviceDesktopX;
