import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowLeftRhombus = (props: SvgProps) => (
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
    <Path d="M16 12h-13" />
    <Path d="M6 9l-3 3l3 3" />
    <Path d="M18.5 9.5l2.5 2.5l-2.5 2.5l-2.5 -2.5z" />
  </Svg>
);
export default SvgArrowLeftRhombus;
