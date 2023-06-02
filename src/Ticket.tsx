import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTicket = (props: SvgProps) => (
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
    <Path d="M15 5l0 2" />
    <Path d="M15 11l0 2" />
    <Path d="M15 17l0 2" />
    <Path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2" />
  </Svg>
);
export default SvgTicket;
