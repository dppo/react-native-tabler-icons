import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceSim = (props: SvgProps) => (
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
    <Path d="M6 3h8.5l4.5 4.5v12.5a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1z" />
    <Path d="M9 11h3v6" />
    <Path d="M15 17v.01" />
    <Path d="M15 14v.01" />
    <Path d="M15 11v.01" />
    <Path d="M9 14v.01" />
    <Path d="M9 17v.01" />
  </Svg>
);
export default SvgDeviceSim;
