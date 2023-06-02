import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFence = (props: SvgProps) => (
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
    <Path d="M4 12v4h16v-4z" />
    <Path d="M6 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6" />
    <Path d="M14 16v4h4v-4m0 -4v-6l-2 -2l-2 2v6" />
  </Svg>
);
export default SvgFence;
