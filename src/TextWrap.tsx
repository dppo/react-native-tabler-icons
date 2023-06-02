import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgTextWrap = (props: SvgProps) => (
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
    <Path d="M4 6l16 0" />
    <Path d="M4 18l5 0" />
    <Path d="M4 12h13a3 3 0 0 1 0 6h-4l2 -2m0 4l-2 -2" />
  </Svg>
);
export default SvgTextWrap;
