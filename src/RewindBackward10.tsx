import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRewindBackward10 = (props: SvgProps) => (
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
    <Path d="M7 9l-3 -3l3 -3" />
    <Path d="M15.997 17.918a6.002 6.002 0 0 0 -.997 -11.918h-11" />
    <Path d="M6 14v6" />
    <Path d="M9 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0 -3 0z" />
  </Svg>
);
export default SvgRewindBackward10;
