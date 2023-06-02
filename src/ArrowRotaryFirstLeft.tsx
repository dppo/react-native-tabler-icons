import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowRotaryFirstLeft = (props: SvgProps) => (
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
    <Path d="M16 10a3 3 0 1 1 0 -6a3 3 0 0 1 0 6z" />
    <Path d="M16 10v10" />
    <Path d="M13.5 9.5l-8.5 8.5" />
    <Path d="M10 18h-5v-5" />
  </Svg>
);
export default SvgArrowRotaryFirstLeft;
