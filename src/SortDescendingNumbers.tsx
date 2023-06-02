import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSortDescendingNumbers = (props: SvgProps) => (
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
    <Path d="M4 15l3 3l3 -3" />
    <Path d="M7 6v12" />
    <Path d="M17 14a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2z" />
    <Path d="M17 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M19 5v3a2 2 0 0 1 -2 2h-1.5" />
  </Svg>
);
export default SvgSortDescendingNumbers;
