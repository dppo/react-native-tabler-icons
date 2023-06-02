import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTrees = (props: SvgProps) => (
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
    <Path d="M16 5l3 3l-2 1l4 4l-3 1l4 4h-9" />
    <Path d="M15 21l0 -3" />
    <Path d="M8 13l-2 -2" />
    <Path d="M8 12l2 -2" />
    <Path d="M8 21v-13" />
    <Path d="M5.824 16a3 3 0 0 1 -2.743 -3.69a3 3 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a3 3 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4z" />
  </Svg>
);
export default SvgTrees;
