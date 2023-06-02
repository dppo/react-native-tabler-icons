import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBorderSides = (props: SvgProps) => (
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
    <Path d="M4 8v8" />
    <Path d="M20 16v-8" />
    <Path d="M8 4h8" />
    <Path d="M8 20h8" />
  </Svg>
);
export default SvgBorderSides;
