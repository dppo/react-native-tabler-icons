import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircuitCapacitorPolarized = (props: SvgProps) => (
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
    <Path d="M22 12h-8" />
    <Path d="M2 12h8" />
    <Path d="M10 7v10" />
    <Path d="M14 7v10" />
    <Path d="M17 5h4" />
    <Path d="M19 3v4" />
  </Svg>
);
export default SvgCircuitCapacitorPolarized;
