import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBadgeVr = (props: SvgProps) => (
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
    <Path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
    <Path d="M14 12h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6m3 0l-2 -3" />
    <Path d="M7 9l2 6l2 -6" />
  </Svg>
);
export default SvgBadgeVr;
