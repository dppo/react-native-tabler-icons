import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgChevronsDownRight = (props: SvgProps) => (
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
    <Path d="M13 5v8h-8" />
    <Path d="M17 9v8h-8" />
  </Svg>
);
export default SvgChevronsDownRight;