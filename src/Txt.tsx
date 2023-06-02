import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTxt = (props: SvgProps) => (
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
    <Path d="M3 8h4" />
    <Path d="M5 8v8" />
    <Path d="M17 8h4" />
    <Path d="M19 8v8" />
    <Path d="M10 8l4 8" />
    <Path d="M10 16l4 -8" />
  </Svg>
);
export default SvgTxt;
