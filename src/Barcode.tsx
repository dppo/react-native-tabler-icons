import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBarcode = (props: SvgProps) => (
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
    <Path d="M4 7v-1a2 2 0 0 1 2 -2h2" />
    <Path d="M4 17v1a2 2 0 0 0 2 2h2" />
    <Path d="M16 4h2a2 2 0 0 1 2 2v1" />
    <Path d="M16 20h2a2 2 0 0 0 2 -2v-1" />
    <Path d="M5 11h1v2h-1z" />
    <Path d="M10 11l0 2" />
    <Path d="M14 11h1v2h-1z" />
    <Path d="M19 11l0 2" />
  </Svg>
);
export default SvgBarcode;
