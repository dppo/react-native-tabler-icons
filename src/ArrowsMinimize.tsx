import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsMinimize = (props: SvgProps) => (
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
    <Path d="M5 9l4 0l0 -4" />
    <Path d="M3 3l6 6" />
    <Path d="M5 15l4 0l0 4" />
    <Path d="M3 21l6 -6" />
    <Path d="M19 9l-4 0l0 -4" />
    <Path d="M15 9l6 -6" />
    <Path d="M19 15l-4 0l0 4" />
    <Path d="M15 15l6 6" />
  </Svg>
);
export default SvgArrowsMinimize;
