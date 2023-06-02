import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandBehance = (props: SvgProps) => (
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
    <Path d="M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5" />
    <Path d="M3 12l4.5 0" />
    <Path d="M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1" />
    <Path d="M16 6l3 0" />
  </Svg>
);
export default SvgBrandBehance;
