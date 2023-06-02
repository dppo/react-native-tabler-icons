import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandPocket = (props: SvgProps) => (
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
    <Path d="M5 4h14a2 2 0 0 1 2 2v6a9 9 0 0 1 -18 0v-6a2 2 0 0 1 2 -2" />
    <Path d="M8 11l4 4l4 -4" />
  </Svg>
);
export default SvgBrandPocket;
