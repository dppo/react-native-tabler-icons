import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBraille = (props: SvgProps) => (
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
    <Path d="M15 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" />
    <Path d="M7 5a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" />
    <Path d="M7 19a1 1 0 1 0 2 0a1 1 0 0 0 -2 0z" />
    <Path d="M16 12h.01" />
    <Path d="M8 12h.01" />
    <Path d="M16 19h.01" />
  </Svg>
);
export default SvgBraille;
