import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgChartAreaLine = (props: SvgProps) => (
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
    <Path d="M4 19l4 -6l4 2l4 -5l4 4l0 5l-16 0" />
    <Path d="M4 12l3 -4l4 2l5 -6l4 4" />
  </Svg>
);
export default SvgChartAreaLine;
