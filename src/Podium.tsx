import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPodium = (props: SvgProps) => (
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
    <Path d="M5 8h14l-.621 2.485a2 2 0 0 1 -1.94 1.515h-8.878a2 2 0 0 1 -1.94 -1.515l-.621 -2.485z" />
    <Path d="M7 8v-2a3 3 0 0 1 3 -3" />
    <Path d="M8 12l1 9" />
    <Path d="M16 12l-1 9" />
    <Path d="M7 21h10" />
  </Svg>
);
export default SvgPodium;
