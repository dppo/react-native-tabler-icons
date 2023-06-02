import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsLeftDown = (props: SvgProps) => (
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
    <Path d="M7 3l-4 4l4 4" />
    <Path d="M3 7h11a3 3 0 0 1 3 3v11" />
    <Path d="M13 17l4 4l4 -4" />
  </Svg>
);
export default SvgArrowsLeftDown;
