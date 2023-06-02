import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTimeline = (props: SvgProps) => (
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
    <Path d="M4 16l6 -7l5 5l5 -6" />
    <Path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </Svg>
);
export default SvgTimeline;
