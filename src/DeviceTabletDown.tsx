import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceTabletDown = (props: SvgProps) => (
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
    <Path d="M12.5 21h-6.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8" />
    <Path d="M19 16v6" />
    <Path d="M22 19l-3 3l-3 -3" />
    <Path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  </Svg>
);
export default SvgDeviceTabletDown;
