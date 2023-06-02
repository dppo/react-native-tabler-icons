import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowRampLeft = (props: SvgProps) => (
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
    <Path d="M17 3l0 8.707" />
    <Path d="M13 7l4 -4l4 4" />
    <Path d="M7 14l-4 -4l4 -4" />
    <Path d="M17 21a11 11 0 0 0 -11 -11h-3" />
  </Svg>
);
export default SvgArrowRampLeft;
