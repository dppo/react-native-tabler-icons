import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLock = (props: SvgProps) => (
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
    <Path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
    <Path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <Path d="M8 11v-4a4 4 0 1 1 8 0v4" />
  </Svg>
);
export default SvgLock;
