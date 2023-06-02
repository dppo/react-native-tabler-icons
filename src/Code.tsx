import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCode = (props: SvgProps) => (
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
    <Path d="M7 8l-4 4l4 4" />
    <Path d="M17 8l4 4l-4 4" />
    <Path d="M14 4l-4 16" />
  </Svg>
);
export default SvgCode;
