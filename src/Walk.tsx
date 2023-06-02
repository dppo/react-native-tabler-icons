import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWalk = (props: SvgProps) => (
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
    <Path d="M13 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M7 21l3 -4" />
    <Path d="M16 21l-2 -4l-3 -3l1 -6" />
    <Path d="M6 12l2 -3l4 -1l3 3l3 1" />
  </Svg>
);
export default SvgWalk;
