import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPencilOff = (props: SvgProps) => (
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
    <Path d="M10 10l-6 6v4h4l6 -6m1.99 -1.99l2.504 -2.504a2.828 2.828 0 1 0 -4 -4l-2.5 2.5" />
    <Path d="M13.5 6.5l4 4" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgPencilOff;
