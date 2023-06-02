import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSignRight = (props: SvgProps) => (
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
    <Path d="M8 21h4" />
    <Path d="M10 21v-10" />
    <Path d="M10 6v-3" />
    <Path d="M6 6h10l2 2.5l-2 2.5h-10z" />
  </Svg>
);
export default SvgSignRight;
