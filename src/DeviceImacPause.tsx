import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceImacPause = (props: SvgProps) => (
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
    <Path d="M13 17h-9a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v9" />
    <Path d="M3 13h18" />
    <Path d="M8 21h5" />
    <Path d="M10 17l-.5 4" />
    <Path d="M17 17v5" />
    <Path d="M21 17v5" />
  </Svg>
);
export default SvgDeviceImacPause;
