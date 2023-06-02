import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowForward = (props: SvgProps) => (
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
    <Path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
  </Svg>
);
export default SvgArrowForward;
