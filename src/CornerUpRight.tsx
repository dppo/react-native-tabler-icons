import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCornerUpRight = (props: SvgProps) => (
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
    <Path d="M6 18v-6a3 3 0 0 1 3 -3h10l-4 -4m0 8l4 -4" />
  </Svg>
);
export default SvgCornerUpRight;
