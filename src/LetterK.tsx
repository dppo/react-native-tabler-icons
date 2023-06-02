import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLetterK = (props: SvgProps) => (
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
    <Path d="M7 4l0 16" />
    <Path d="M7 12h2l8 -8" />
    <Path d="M9 12l8 8" />
  </Svg>
);
export default SvgLetterK;
