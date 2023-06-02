import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgEyeglass = (props: SvgProps) => (
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
    <Path d="M8 4h-2l-3 10" />
    <Path d="M16 4h2l3 10" />
    <Path d="M10 16l4 0" />
    <Path d="M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
    <Path d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" />
  </Svg>
);
export default SvgEyeglass;
