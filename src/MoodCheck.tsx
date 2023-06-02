import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMoodCheck = (props: SvgProps) => (
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
    <Path d="M20.925 13.163a8.998 8.998 0 0 0 -8.925 -10.163a9 9 0 0 0 0 18" />
    <Path d="M9 10h.01" />
    <Path d="M15 10h.01" />
    <Path d="M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1" />
    <Path d="M15 19l2 2l4 -4" />
  </Svg>
);
export default SvgMoodCheck;
