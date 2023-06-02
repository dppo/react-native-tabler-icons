import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSignLeft = (props: SvgProps) => (
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
    <Path d="M16 21h-4" />
    <Path d="M14 21v-10" />
    <Path d="M14 6v-3" />
    <Path d="M18 6h-10l-2 2.5l2 2.5h10z" />
  </Svg>
);
export default SvgSignLeft;
