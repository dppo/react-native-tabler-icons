import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSortAscending = (props: SvgProps) => (
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
    <Path d="M4 6l7 0" />
    <Path d="M4 12l7 0" />
    <Path d="M4 18l9 0" />
    <Path d="M15 9l3 -3l3 3" />
    <Path d="M18 6l0 12" />
  </Svg>
);
export default SvgSortAscending;
