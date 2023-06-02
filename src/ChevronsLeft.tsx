import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgChevronsLeft = (props: SvgProps) => (
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
    <Path d="M11 7l-5 5l5 5" />
    <Path d="M17 7l-5 5l5 5" />
  </Svg>
);
export default SvgChevronsLeft;
