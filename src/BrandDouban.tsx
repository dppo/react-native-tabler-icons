import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandDouban = (props: SvgProps) => (
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
    <Path d="M4 20h16" />
    <Path d="M5 4h14" />
    <Path d="M8 8h8a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-2a2 2 0 0 1 2 -2z" />
    <Path d="M16 14l-2 6" />
    <Path d="M8 17l1 3" />
  </Svg>
);
export default SvgBrandDouban;
