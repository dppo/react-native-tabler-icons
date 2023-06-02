import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircuitBattery = (props: SvgProps) => (
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
    <Path d="M2 12h4" />
    <Path d="M18 12h4" />
    <Path d="M18 5v14" />
    <Path d="M14 9v6" />
    <Path d="M10 5v14" />
    <Path d="M6 9v6" />
  </Svg>
);
export default SvgCircuitBattery;
