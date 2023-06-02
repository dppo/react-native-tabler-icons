import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSquareF1 = (props: SvgProps) => (
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
    <Path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
    <Path d="M13 11l2 -2v6" />
    <Path d="M8 12h2" />
    <Path d="M10 9h-2v6" />
  </Svg>
);
export default SvgSquareF1;
