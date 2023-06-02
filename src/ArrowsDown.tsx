import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsDown = (props: SvgProps) => (
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
    <Path d="M7 21l0 -18" />
    <Path d="M20 18l-3 3l-3 -3" />
    <Path d="M4 18l3 3l3 -3" />
    <Path d="M17 21l0 -18" />
  </Svg>
);
export default SvgArrowsDown;
