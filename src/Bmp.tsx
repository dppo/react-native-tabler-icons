import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBmp = (props: SvgProps) => (
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
    <Path d="M18 16v-8h2a2 2 0 1 1 0 4h-2" />
    <Path d="M6 14a2 2 0 0 1 -2 2h-2v-8h2a2 2 0 1 1 0 4h-2h2a2 2 0 0 1 2 2z" />
    <Path d="M9 16v-8l3 6l3 -6v8" />
  </Svg>
);
export default SvgBmp;
