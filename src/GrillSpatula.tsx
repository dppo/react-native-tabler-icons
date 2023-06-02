import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGrillSpatula = (props: SvgProps) => (
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
    <Path d="M10.2 10.2l6.3 6.3" />
    <Path d="M19.347 16.575l1.08 1.079a1.96 1.96 0 0 1 -2.773 2.772l-1.08 -1.079a1.96 1.96 0 0 1 2.773 -2.772z" />
    <Path d="M3 7l3.05 3.15a2.9 2.9 0 0 0 4.1 -4.1l-3.15 -3.05l-4 4z" />
  </Svg>
);
export default SvgGrillSpatula;
