import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBadgeAd = (props: SvgProps) => (
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
    <Path d="M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
    <Path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0v4.5" />
    <Path d="M7 13h3" />
  </Svg>
);
export default SvgBadgeAd;
