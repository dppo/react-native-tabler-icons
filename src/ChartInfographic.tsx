import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgChartInfographic = (props: SvgProps) => (
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
    <Path d="M7 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <Path d="M7 3v4h4" />
    <Path d="M9 17l0 4" />
    <Path d="M17 14l0 7" />
    <Path d="M13 13l0 8" />
    <Path d="M21 12l0 9" />
  </Svg>
);
export default SvgChartInfographic;
