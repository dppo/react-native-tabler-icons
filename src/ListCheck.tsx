import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgListCheck = (props: SvgProps) => (
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
    <Path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
    <Path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
    <Path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
    <Path d="M11 6l9 0" />
    <Path d="M11 12l9 0" />
    <Path d="M11 18l9 0" />
  </Svg>
);
export default SvgListCheck;
