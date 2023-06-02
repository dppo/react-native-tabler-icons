import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgKeyboardOff = (props: SvgProps) => (
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
    <Path d="M18 18h-14a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2m4 0h10a2 2 0 0 1 2 2v8c0 .554 -.226 1.056 -.59 1.418" />
    <Path d="M6 10l0 .01" />
    <Path d="M10 10l0 .01" />
    <Path d="M14 10l0 .01" />
    <Path d="M18 10l0 .01" />
    <Path d="M6 14l0 .01" />
    <Path d="M18 14l0 .01" />
    <Path d="M10 14l4 0" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgKeyboardOff;
