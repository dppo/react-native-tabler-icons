import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgStretching2 = (props: SvgProps) => (
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
    <Path d="M11 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
    <Path d="M6.5 21l3.5 -5" />
    <Path d="M5 11l7 -2" />
    <Path d="M16 21l-4 -7v-5l7 -4" />
  </Svg>
);
export default SvgStretching2;
