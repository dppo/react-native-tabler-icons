import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceIpadHorizontalCode = (props: SvgProps) => (
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
    <Path d="M11 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7" />
    <Path d="M9 17h2.5" />
    <Path d="M20 21l2 -2l-2 -2" />
    <Path d="M17 17l-2 2l2 2" />
  </Svg>
);
export default SvgDeviceIpadHorizontalCode;
