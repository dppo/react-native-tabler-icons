import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsRightDown = (props: SvgProps) => (
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
    <Path d="M3 17l4 4l4 -4" />
    <Path d="M7 21v-11a3 3 0 0 1 3 -3h11" />
    <Path d="M17 11l4 -4l-4 -4" />
  </Svg>
);
export default SvgArrowsRightDown;
