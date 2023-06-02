import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMathXMinusX = (props: SvgProps) => (
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
    <Path d="M2 9l6 6" />
    <Path d="M2 15l6 -6" />
    <Path d="M16 9l6 6" />
    <Path d="M16 15l6 -6" />
    <Path d="M10 12h4" />
  </Svg>
);
export default SvgMathXMinusX;
