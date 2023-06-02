import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgEaseOutControlPoint = (props: SvgProps) => (
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
    <Path d="M3 21s10 -16 18 -16" />
    <Path d="M7 5a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" />
    <Path d="M7 5h2" />
    <Path d="M14 5h-2" />
  </Svg>
);
export default SvgEaseOutControlPoint;
