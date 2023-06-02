import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBusinessplan = (props: SvgProps) => (
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
    <Path d="M16 6m-5 0a5 3 0 1 0 10 0a5 3 0 1 0 -10 0" />
    <Path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
    <Path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
    <Path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
    <Path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
    <Path d="M5 15v1m0 -8v1" />
  </Svg>
);
export default SvgBusinessplan;
