import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircleChevronsLeft = (props: SvgProps) => (
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
    <Path d="M15 15l-3 -3l3 -3" />
    <Path d="M11 15l-3 -3l3 -3" />
    <Path d="M21 12a9 9 0 1 0 0 .265l0 -.265z" />
  </Svg>
);
export default SvgCircleChevronsLeft;
