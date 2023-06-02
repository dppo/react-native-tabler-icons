import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHomeSignal = (props: SvgProps) => (
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
    <Path d="M15 22v-2" />
    <Path d="M18 22v-4" />
    <Path d="M21 22v-6" />
    <Path d="M19 12.494v-.494h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h4" />
    <Path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v.5" />
  </Svg>
);
export default SvgHomeSignal;
