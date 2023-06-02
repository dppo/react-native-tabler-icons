import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTransitionBottom = (props: SvgProps) => (
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
    <Path d="M21 18a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3" />
    <Path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
    <Path d="M12 9v8" />
    <Path d="M9 14l3 3l3 -3" />
  </Svg>
);
export default SvgTransitionBottom;
