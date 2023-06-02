import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgKeyboard = (props: SvgProps) => (
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
    <Path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z" />
    <Path d="M6 10l0 .01" />
    <Path d="M10 10l0 .01" />
    <Path d="M14 10l0 .01" />
    <Path d="M18 10l0 .01" />
    <Path d="M6 14l0 .01" />
    <Path d="M18 14l0 .01" />
    <Path d="M10 14l4 .01" />
  </Svg>
);
export default SvgKeyboard;
