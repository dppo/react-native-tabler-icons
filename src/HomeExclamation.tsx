import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHomeExclamation = (props: SvgProps) => (
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
    <Path d="M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h8" />
    <Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.857 1.257" />
    <Path d="M19 16v3" />
    <Path d="M19 22v.01" />
  </Svg>
);
export default SvgHomeExclamation;
