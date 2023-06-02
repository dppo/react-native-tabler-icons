import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgChartSankey = (props: SvgProps) => (
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
    <Path d="M3 3v18h18" />
    <Path d="M3 6h18" />
    <Path d="M3 8c10 0 8 9 18 9" />
  </Svg>
);
export default SvgChartSankey;
