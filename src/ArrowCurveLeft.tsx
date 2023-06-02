import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowCurveLeft = (props: SvgProps) => (
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
    <Path d="M14 7l-4 -4l-4 4" />
    <Path d="M10 3v4.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v2.394" />
  </Svg>
);
export default SvgArrowCurveLeft;
