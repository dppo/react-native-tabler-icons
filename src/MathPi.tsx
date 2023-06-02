import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMathPi = (props: SvgProps) => (
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
    <Path d="M7 20v-16" />
    <Path d="M17 4v16" />
    <Path d="M20 4h-16" />
  </Svg>
);
export default SvgMathPi;
