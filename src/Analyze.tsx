import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAnalyze = (props: SvgProps) => (
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
    <Path d="M20 11a8.1 8.1 0 0 0 -6.986 -6.918a8.095 8.095 0 0 0 -8.019 3.918" />
    <Path d="M4 13a8.1 8.1 0 0 0 15 3" />
    <Path d="M19 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M5 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  </Svg>
);
export default SvgAnalyze;
