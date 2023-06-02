import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAirConditioningDisabled = (props: SvgProps) => (
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
    <Path d="M3 8m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
    <Path d="M7 16v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3" />
  </Svg>
);
export default SvgAirConditioningDisabled;
