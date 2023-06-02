import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMotorbike = (props: SvgProps) => (
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
    <Path d="M5 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M19 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" />
    <Path d="M13 6h2l1.5 3l2 4" />
  </Svg>
);
export default SvgMotorbike;
