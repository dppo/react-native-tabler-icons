import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceLaptopOff = (props: SvgProps) => (
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
    <Path d="M3 19h16" />
    <Path d="M10 6h8a1 1 0 0 1 1 1v8m-3 1h-10a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgDeviceLaptopOff;
