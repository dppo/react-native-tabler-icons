import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowRampRight = (props: SvgProps) => (
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
    <Path d="M7 3l0 8.707" />
    <Path d="M11 7l-4 -4l-4 4" />
    <Path d="M17 14l4 -4l-4 -4" />
    <Path d="M7 21a11 11 0 0 1 11 -11h3" />
  </Svg>
);
export default SvgArrowRampRight;
