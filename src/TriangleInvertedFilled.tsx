import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTriangleInvertedFilled = (props: SvgProps) => (
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
    <Path
      d="M19.007 3a3 3 0 0 1 2.828 3.94l-.068 .185l-.062 .126l-7.09 12.233a3 3 0 0 1 -5.137 .19l-.103 -.173l-7.1 -12.25l-.061 -.125a3 3 0 0 1 2.625 -4.125l.058 -.001l.06 .002l.043 -.002h14.007z"
      strokeWidth={0}
      fill="currentColor"
    />
  </Svg>
);
export default SvgTriangleInvertedFilled;
