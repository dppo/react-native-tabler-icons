import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSubmarine = (props: SvgProps) => (
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
    <Path d="M3 11v6h2l1 -1.5l3 1.5h10a3 3 0 0 0 0 -6h-10h0l-3 1.5l-1 -1.5h-2z" />
    <Path d="M17 11l-1 -3h-5l-1 3" />
    <Path d="M13 8v-2a1 1 0 0 1 1 -1h1" />
  </Svg>
);
export default SvgSubmarine;