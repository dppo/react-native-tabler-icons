import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDevicesCog = (props: SvgProps) => (
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
    <Path d="M13 14.5v-5.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3" />
    <Path d="M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8" />
    <Path d="M16 9h2" />
    <Path d="M19.001 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M19.001 15.5v1.5" />
    <Path d="M19.001 21v1.5" />
    <Path d="M22.032 17.25l-1.299 .75" />
    <Path d="M17.27 20l-1.3 .75" />
    <Path d="M15.97 17.25l1.3 .75" />
    <Path d="M20.733 20l1.3 .75" />
  </Svg>
);
export default SvgDevicesCog;
