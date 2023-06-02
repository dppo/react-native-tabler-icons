import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsRightLeft = (props: SvgProps) => (
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
    <Path d="M21 7l-18 0" />
    <Path d="M18 10l3 -3l-3 -3" />
    <Path d="M6 20l-3 -3l3 -3" />
    <Path d="M3 17l18 0" />
  </Svg>
);
export default SvgArrowsRightLeft;
