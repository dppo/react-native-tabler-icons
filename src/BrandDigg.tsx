import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandDigg = (props: SvgProps) => (
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
    <Path d="M6 15h-3v-4h3" />
    <Path d="M15 15h-3v-4h3" />
    <Path d="M9 15v-4" />
    <Path d="M15 11v7h-3" />
    <Path d="M6 7v8" />
    <Path d="M21 15h-3v-4h3" />
    <Path d="M21 11v7h-3" />
  </Svg>
);
export default SvgBrandDigg;
