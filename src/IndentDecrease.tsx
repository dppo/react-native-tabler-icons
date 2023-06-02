import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgIndentDecrease = (props: SvgProps) => (
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
    <Path d="M20 6l-7 0" />
    <Path d="M20 12l-9 0" />
    <Path d="M20 18l-7 0" />
    <Path d="M8 8l-4 4l4 4" />
  </Svg>
);
export default SvgIndentDecrease;
