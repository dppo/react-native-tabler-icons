import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowBackUpDouble = (props: SvgProps) => (
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
    <Path d="M13 14l-4 -4l4 -4" />
    <Path d="M8 14l-4 -4l4 -4" />
    <Path d="M9 10h7a4 4 0 1 1 0 8h-1" />
  </Svg>
);
export default SvgArrowBackUpDouble;
