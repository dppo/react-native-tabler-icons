import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandSublimeText = (props: SvgProps) => (
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
    <Path d="M19 8l-14 4.5v-5.5l14 -4.5z" />
    <Path d="M19 17l-14 4.5v-5.5l14 -4.5z" />
    <Path d="M19 11.5l-14 -4.5" />
    <Path d="M5 12.5l14 4.5" />
  </Svg>
);
export default SvgBrandSublimeText;
