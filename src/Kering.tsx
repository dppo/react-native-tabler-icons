import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgKering = (props: SvgProps) => (
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
    <Path d="M16 15v-3.5a2.5 2.5 0 1 1 5 0v3.5m0 -2h-5" />
    <Path d="M3 9l3 6l3 -6" />
    <Path d="M9 20l6 -16" />
  </Svg>
);
export default SvgKering;
