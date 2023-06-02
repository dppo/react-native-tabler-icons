import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTextColor = (props: SvgProps) => (
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
    <Path d="M9 15v-7a3 3 0 0 1 6 0v7" />
    <Path d="M9 11h6" />
    <Path d="M5 19h14" />
  </Svg>
);
export default SvgTextColor;
