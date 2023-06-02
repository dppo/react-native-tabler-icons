import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandFiverr = (props: SvgProps) => (
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
    <Path d="M15 3h-2a6 6 0 0 0 -6 6h-3v4h3v8h4v-7h4v7h4v-11h-8v-1.033a1.967 1.967 0 0 1 2 -1.967h2v-4z" />
  </Svg>
);
export default SvgBrandFiverr;
