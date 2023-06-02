import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandHbo = (props: SvgProps) => (
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
    <Path d="M2 16v-8" />
    <Path d="M6 8v8" />
    <Path d="M2 12h4" />
    <Path d="M9 16h2a2 2 0 1 0 0 -4h-2h2a2 2 0 1 0 0 -4h-2v8z" />
    <Path d="M19 8a4 4 0 1 1 0 8a4 4 0 0 1 0 -8z" />
    <Path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </Svg>
);
export default SvgBrandHbo;
