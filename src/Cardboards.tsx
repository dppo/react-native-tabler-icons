import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCardboards = (props: SvgProps) => (
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
    <Path d="M3 8v8.5a2.5 2.5 0 0 0 2.5 2.5h1.06a3 3 0 0 0 2.34 -1.13l1.54 -1.92a2 2 0 0 1 3.12 0l1.54 1.92a3 3 0 0 0 2.34 1.13h1.06a2.5 2.5 0 0 0 2.5 -2.5v-8.5a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2z" />
    <Path d="M8 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </Svg>
);
export default SvgCardboards;
