import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCornerDownLeftDouble = (props: SvgProps) => (
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
    <Path d="M19 5v6a3 3 0 0 1 -3 3h-7" />
    <Path d="M13 10l-4 4l4 4m-5 -8l-4 4l4 4" />
  </Svg>
);
export default SvgCornerDownLeftDouble;
