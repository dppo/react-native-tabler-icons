import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTex = (props: SvgProps) => (
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
    <Path d="M9 8v-1h-6v1" />
    <Path d="M6 15v-8" />
    <Path d="M21 15l-5 -8" />
    <Path d="M16 15l5 -8" />
    <Path d="M14 11h-4v8h4" />
    <Path d="M10 15h3" />
  </Svg>
);
export default SvgTex;
