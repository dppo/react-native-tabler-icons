import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTextDirectionRtl = (props: SvgProps) => (
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
    <Path d="M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5" />
    <Path d="M14 15v-11" />
    <Path d="M10 15v-11" />
    <Path d="M5 19h14" />
    <Path d="M7 21l-2 -2l2 -2" />
  </Svg>
);
export default SvgTextDirectionRtl;
