import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTransitionLeft = (props: SvgProps) => (
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
    <Path d="M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3" />
    <Path d="M21 6v12a3 3 0 0 1 -6 0v-12a3 3 0 0 1 6 0z" />
    <Path d="M15 12h-8" />
    <Path d="M10 9l-3 3l3 3" />
  </Svg>
);
export default SvgTransitionLeft;
