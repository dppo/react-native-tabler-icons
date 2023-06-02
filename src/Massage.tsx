import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMassage = (props: SvgProps) => (
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
    <Path d="M4 17m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M4 22l4 -2v-3h12" />
    <Path d="M11 20h9" />
    <Path d="M8 14l3 -2l1 -4c3 1 3 4 3 6" />
  </Svg>
);
export default SvgMassage;
