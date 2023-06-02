import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBadgeOff = (props: SvgProps) => (
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
    <Path d="M7 7v10l5 3l5 -3m0 -4v-9l-5 3l-2.496 -1.497" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgBadgeOff;
