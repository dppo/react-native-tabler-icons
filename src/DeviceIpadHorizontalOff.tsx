import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDeviceIpadHorizontalOff = (props: SvgProps) => (
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
    <Path d="M8 4h12a2 2 0 0 1 2 2v12m-2 2h-16a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
    <Path d="M9 17h6" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgDeviceIpadHorizontalOff;
