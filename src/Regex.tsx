import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRegex = (props: SvgProps) => (
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
    <Path d="M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5z" />
    <Path d="M17 7.875l3 -1.687" />
    <Path d="M17 7.875v3.375" />
    <Path d="M17 7.875l-3 -1.687" />
    <Path d="M17 7.875l3 1.688" />
    <Path d="M17 4.5v3.375" />
    <Path d="M17 7.875l-3 1.688" />
  </Svg>
);
export default SvgRegex;
