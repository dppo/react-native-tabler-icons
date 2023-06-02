import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLayoutNavbarExpand = (props: SvgProps) => (
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
    <Path d="M4 18v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
    <Path d="M4 9h16" />
    <Path d="M10 14l2 2l2 -2" />
  </Svg>
);
export default SvgLayoutNavbarExpand;
