import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCup = (props: SvgProps) => (
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
    <Path d="M5 11h14v-3h-14z" />
    <Path d="M17.5 11l-1.5 10h-8l-1.5 -10" />
    <Path d="M6 8v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" />
    <Path d="M15 5v-2" />
  </Svg>
);
export default SvgCup;
