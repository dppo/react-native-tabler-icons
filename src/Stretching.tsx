import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgStretching = (props: SvgProps) => (
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
    <Path d="M16 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M5 20l5 -.5l1 -2" />
    <Path d="M18 20v-5h-5.5l2.5 -6.5l-5.5 1l1.5 2" />
  </Svg>
);
export default SvgStretching;
