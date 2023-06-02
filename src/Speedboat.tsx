import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSpeedboat = (props: SvgProps) => (
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
    <Path d="M3 17h13.4a3 3 0 0 0 2.5 -1.34l3.1 -4.66h0h-6.23a4 4 0 0 0 -1.49 .29l-3.56 1.42a4 4 0 0 1 -1.49 .29h-3.73h0h-1l-1.5 4z" />
    <Path d="M6 13l1.5 -5" />
    <Path d="M6 8h8l2 3" />
  </Svg>
);
export default SvgSpeedboat;
