import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPercentage = (props: SvgProps) => (
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
    <Path d="M17 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M7 7m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M6 18l12 -12" />
  </Svg>
);
export default SvgPercentage;
