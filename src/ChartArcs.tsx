import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgChartArcs = (props: SvgProps) => (
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
    <Path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M16.924 11.132a5 5 0 1 0 -4.056 5.792" />
    <Path d="M3 12a9 9 0 1 0 9 -9" />
  </Svg>
);
export default SvgChartArcs;
