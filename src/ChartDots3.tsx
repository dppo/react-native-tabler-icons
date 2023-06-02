import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgChartDots3 = (props: SvgProps) => (
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
    <Path d="M5 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M16 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M6 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M9 17l5 -1.5" />
    <Path d="M6.5 8.5l7.81 5.37" />
    <Path d="M7 7l8 -1" />
  </Svg>
);
export default SvgChartDots3;
