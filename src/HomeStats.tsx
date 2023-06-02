import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHomeStats = (props: SvgProps) => (
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
    <Path d="M19 13v-1h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h2.5" />
    <Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" />
    <Path d="M13 22l3 -3l2 2l4 -4" />
    <Path d="M19 17h3v3" />
  </Svg>
);
export default SvgHomeStats;
