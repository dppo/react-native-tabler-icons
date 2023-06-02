import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandKotlin = (props: SvgProps) => (
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
    <Path d="M20 20h-16v-16h16" />
    <Path d="M4 20l16 -16" />
    <Path d="M4 12l8 -8" />
    <Path d="M12 12l8 8" />
  </Svg>
);
export default SvgBrandKotlin;
