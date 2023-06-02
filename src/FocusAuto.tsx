import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFocusAuto = (props: SvgProps) => (
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
    <Path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
    <Path d="M4 16v2a2 2 0 0 0 2 2h2" />
    <Path d="M16 4h2a2 2 0 0 1 2 2v2" />
    <Path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
    <Path d="M10 15v-4a2 2 0 1 1 4 0v4" />
    <Path d="M10 13h4" />
  </Svg>
);
export default SvgFocusAuto;
