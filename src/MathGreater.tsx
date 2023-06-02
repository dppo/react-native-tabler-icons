import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMathGreater = (props: SvgProps) => (
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
    <Path d="M5 18l14 -6l-14 -6" />
  </Svg>
);
export default SvgMathGreater;
