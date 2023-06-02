import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgParentheses = (props: SvgProps) => (
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
    <Path d="M7 4a12.25 12.25 0 0 0 0 16" />
    <Path d="M17 4a12.25 12.25 0 0 1 0 16" />
  </Svg>
);
export default SvgParentheses;
