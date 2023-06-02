import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSpherePlus = (props: SvgProps) => (
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
    <Path d="M3 12c0 1.657 4.03 3 9 3c1.116 0 2.185 -.068 3.172 -.192m5.724 -2.35a1.1 1.1 0 0 0 .104 -.458" />
    <Path d="M20.984 12.546a9 9 0 1 0 -8.442 8.438" />
    <Path d="M16 19h6" />
    <Path d="M19 16v6" />
  </Svg>
);
export default SvgSpherePlus;
