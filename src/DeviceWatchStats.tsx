import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceWatchStats = (props: SvgProps) => (
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
    <Path d="M6 6m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z" />
    <Path d="M9 18v3h6v-3" />
    <Path d="M9 6v-3h6v3" />
    <Path d="M9 14v-4" />
    <Path d="M12 14v-1" />
    <Path d="M15 14v-3" />
  </Svg>
);
export default SvgDeviceWatchStats;
