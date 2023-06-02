import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceIpadOff = (props: SvgProps) => (
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
    <Path d="M6 2h12a2 2 0 0 1 2 2v12m0 4a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-16" />
    <Path d="M9 19h6" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgDeviceIpadOff;
