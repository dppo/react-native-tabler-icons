import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceImacBolt = (props: SvgProps) => (
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
    <Path d="M13.5 17h-9.5a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8.5" />
    <Path d="M3 13h13" />
    <Path d="M8 21h5.5" />
    <Path d="M10 17l-.5 4" />
    <Path d="M19 16l-2 3h4l-2 3" />
  </Svg>
);
export default SvgDeviceImacBolt;
