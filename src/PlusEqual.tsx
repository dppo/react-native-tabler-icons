import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPlusEqual = (props: SvgProps) => (
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
    <Path d="M4 7h6" />
    <Path d="M7 4v6" />
    <Path d="M20 16h-6" />
    <Path d="M20 19h-6" />
    <Path d="M5 19l14 -14" />
  </Svg>
);
export default SvgPlusEqual;
