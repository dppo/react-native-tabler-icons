import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCircuitCellPlus = (props: SvgProps) => (
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
    <Path d="M2 12h9" />
    <Path d="M15 12h7" />
    <Path d="M11 5v14" />
    <Path d="M15 9v6" />
    <Path d="M3 5h4" />
    <Path d="M5 3v4" />
  </Svg>
);
export default SvgCircuitCellPlus;
