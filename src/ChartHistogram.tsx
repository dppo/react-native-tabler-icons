import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgChartHistogram = (props: SvgProps) => (
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
    <Path d="M20 18v3" />
    <Path d="M16 16v5" />
    <Path d="M12 13v8" />
    <Path d="M8 16v5" />
    <Path d="M3 11c6 0 5 -5 9 -5s3 5 9 5" />
  </Svg>
);
export default SvgChartHistogram;
