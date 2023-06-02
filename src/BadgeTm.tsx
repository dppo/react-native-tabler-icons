import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBadgeTm = (props: SvgProps) => (
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
    <Path d="M6 9h4" />
    <Path d="M8 9v6" />
    <Path d="M13 15v-6l2 3l2 -3v6" />
  </Svg>
);
export default SvgBadgeTm;
