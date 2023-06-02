import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowRoundaboutLeft = (props: SvgProps) => (
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
    <Path d="M3 9h8a5 5 0 1 1 5 5v7" />
    <Path d="M7 5l-4 4l4 4" />
  </Svg>
);
export default SvgArrowRoundaboutLeft;
