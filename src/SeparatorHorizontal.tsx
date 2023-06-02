import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSeparatorHorizontal = (props: SvgProps) => (
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
    <Path d="M4 12l16 0" />
    <Path d="M8 8l4 -4l4 4" />
    <Path d="M16 16l-4 4l-4 -4" />
  </Svg>
);
export default SvgSeparatorHorizontal;
