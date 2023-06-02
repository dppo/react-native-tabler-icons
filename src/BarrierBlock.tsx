import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBarrierBlock = (props: SvgProps) => (
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
    <Path d="M4 7m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v7a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
    <Path d="M7 16v4" />
    <Path d="M7.5 16l9 -9" />
    <Path d="M13.5 16l6.5 -6.5" />
    <Path d="M4 13.5l6.5 -6.5" />
    <Path d="M17 16v4" />
    <Path d="M5 20h4" />
    <Path d="M15 20h4" />
    <Path d="M17 7v-2" />
    <Path d="M7 7v-2" />
  </Svg>
);
export default SvgBarrierBlock;
