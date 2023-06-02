import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgChartPpf = (props: SvgProps) => (
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
    <Path d="M19 17c0 -6.075 -5.373 -11 -12 -11" />
    <Path d="M3 3v18h18" />
  </Svg>
);
export default SvgChartPpf;
