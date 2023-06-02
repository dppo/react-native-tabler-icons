import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgJetpack = (props: SvgProps) => (
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
    <Path d="M10 6a3 3 0 1 0 -6 0v7h6v-7z" />
    <Path d="M14 13h6v-7a3 3 0 0 0 -6 0v7z" />
    <Path d="M5 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" />
    <Path d="M15 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" />
    <Path d="M10 8h4" />
    <Path d="M10 11h4" />
  </Svg>
);
export default SvgJetpack;
