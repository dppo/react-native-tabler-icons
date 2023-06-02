import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgEqualDouble = (props: SvgProps) => (
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
    <Path d="M3 10h7" />
    <Path d="M3 14h7" />
    <Path d="M14 10h7" />
    <Path d="M14 14h7" />
  </Svg>
);
export default SvgEqualDouble;
