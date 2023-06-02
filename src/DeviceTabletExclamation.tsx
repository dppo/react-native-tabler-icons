import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceTabletExclamation = (props: SvgProps) => (
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
    <Path d="M15 21h-9a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" />
    <Path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <Path d="M19 16v3" />
    <Path d="M19 22v.01" />
  </Svg>
);
export default SvgDeviceTabletExclamation;
