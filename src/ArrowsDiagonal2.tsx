import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowsDiagonal2 = (props: SvgProps) => (
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
    <Path d="M16 20l4 0l0 -4" />
    <Path d="M14 14l6 6" />
    <Path d="M8 4l-4 0l0 4" />
    <Path d="M4 4l6 6" />
  </Svg>
);
export default SvgArrowsDiagonal2;
