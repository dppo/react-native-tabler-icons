import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCornerRightUpDouble = (props: SvgProps) => (
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
    <Path d="M5 19h6a3 3 0 0 0 3 -3v-7" />
    <Path d="M10 13l4 -4l4 4m-8 -5l4 -4l4 4" />
  </Svg>
);
export default SvgCornerRightUpDouble;
