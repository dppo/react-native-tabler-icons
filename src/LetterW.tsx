import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLetterW = (props: SvgProps) => (
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
    <Path d="M4 4l4 16l4 -14l4 14l4 -16" />
  </Svg>
);
export default SvgLetterW;
