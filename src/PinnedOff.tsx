import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPinnedOff = (props: SvgProps) => (
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
    <Path d="M3 3l18 18" />
    <Path d="M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251" />
    <Path d="M9 15l-4.5 4.5" />
    <Path d="M14.5 4l5.5 5.5" />
  </Svg>
);
export default SvgPinnedOff;
