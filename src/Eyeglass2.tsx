import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgEyeglass2 = (props: SvgProps) => (
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
    <Path d="M8 4h-2l-3 10v2.5" />
    <Path d="M16 4h2l3 10v2.5" />
    <Path d="M10 16l4 0" />
    <Path d="M17.5 16.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
    <Path d="M6.5 16.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
  </Svg>
);
export default SvgEyeglass2;
