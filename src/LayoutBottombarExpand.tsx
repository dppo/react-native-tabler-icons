import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLayoutBottombarExpand = (props: SvgProps) => (
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
    <Path d="M20 6v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2z" />
    <Path d="M20 15h-16" />
    <Path d="M14 10l-2 -2l-2 2" />
  </Svg>
);
export default SvgLayoutBottombarExpand;