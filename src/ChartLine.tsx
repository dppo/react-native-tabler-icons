import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgChartLine = (props: SvgProps) => (
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
    <Path d="M4 19l16 0" />
    <Path d="M4 15l4 -6l4 2l4 -5l4 4" />
  </Svg>
);
export default SvgChartLine;
