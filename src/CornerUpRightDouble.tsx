import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCornerUpRightDouble = (props: SvgProps) => (
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
    <Path d="M4 18v-6a3 3 0 0 1 3 -3h7" />
    <Path d="M10 13l4 -4l-4 -4m5 8l4 -4l-4 -4" />
  </Svg>
);
export default SvgCornerUpRightDouble;
