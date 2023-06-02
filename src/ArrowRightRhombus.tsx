import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowRightRhombus = (props: SvgProps) => (
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
    <Path d="M8 12h13" />
    <Path d="M18 9l3 3l-3 3" />
    <Path d="M5.5 9.5l-2.5 2.5l2.5 2.5l2.5 -2.5z" />
  </Svg>
);
export default SvgArrowRightRhombus;
