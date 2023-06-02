import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgIndentIncrease = (props: SvgProps) => (
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
    <Path d="M20 6l-11 0" />
    <Path d="M20 12l-7 0" />
    <Path d="M20 18l-11 0" />
    <Path d="M4 8l4 4l-4 4" />
  </Svg>
);
export default SvgIndentIncrease;
