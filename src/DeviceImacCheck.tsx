import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceImacCheck = (props: SvgProps) => (
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
    <Path d="M11.5 17h-7.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v9" />
    <Path d="M3 13h18" />
    <Path d="M8 21h3.5" />
    <Path d="M10 17l-.5 4" />
    <Path d="M15 19l2 2l4 -4" />
  </Svg>
);
export default SvgDeviceImacCheck;
