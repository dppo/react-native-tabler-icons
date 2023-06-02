import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAxisX = (props: SvgProps) => (
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
    <Path d="M4 13v.01" />
    <Path d="M4 9v.01" />
    <Path d="M4 5v.01" />
    <Path d="M17 20l3 -3l-3 -3" />
    <Path d="M4 17h16" />
  </Svg>
);
export default SvgAxisX;
