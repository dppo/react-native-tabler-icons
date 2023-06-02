import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCurling = (props: SvgProps) => (
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
    <Path d="M4 9m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v2a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
    <Path d="M4 14h16" />
    <Path d="M8 5h6a2 2 0 0 1 2 2v2" />
  </Svg>
);
export default SvgCurling;
