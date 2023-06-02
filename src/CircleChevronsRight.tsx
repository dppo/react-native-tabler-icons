import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircleChevronsRight = (props: SvgProps) => (
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
    <Path d="M9 9l3 3l-3 3" />
    <Path d="M13 9l3 3l-3 3" />
    <Path d="M3 12a9 9 0 1 0 0 -.265l0 .265z" />
  </Svg>
);
export default SvgCircleChevronsRight;
