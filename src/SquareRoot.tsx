import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSquareRoot = (props: SvgProps) => (
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
    <Path d="M3 12h2l4 8l4 -16h8" />
  </Svg>
);
export default SvgSquareRoot;
