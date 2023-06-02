import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLayersDifference = (props: SvgProps) => (
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
    <Path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2v-2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-2" />
    <Path d="M10 8l-2 0l0 2" />
    <Path d="M8 14l0 2l2 0" />
    <Path d="M14 8l2 0l0 2" />
    <Path d="M16 14l0 2l-2 0" />
  </Svg>
);
export default SvgLayersDifference;
