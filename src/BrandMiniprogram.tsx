import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandMiniprogram = (props: SvgProps) => (
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
    <Path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" />
    <Path d="M8 11.503a2.5 2.5 0 1 0 4 2v-3a2.5 2.5 0 1 1 4 2" />
  </Svg>
);
export default SvgBrandMiniprogram;
