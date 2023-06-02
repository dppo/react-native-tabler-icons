import * as React from 'react';
import Svg, { SvgProps, Path, Circle } from 'react-native-svg';
const SvgDivide = (props: SvgProps) => (
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
    <Circle cx={12} cy={6} r={1} fill="currentColor" />
    <Circle cx={12} cy={18} r={1} fill="currentColor" />
    <Path d="M5 12l14 0" />
  </Svg>
);
export default SvgDivide;
