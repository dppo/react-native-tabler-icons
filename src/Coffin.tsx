import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCoffin = (props: SvgProps) => (
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
    <Path d="M7 3l-2 6l2 12h6l2 -12l-2 -6z" />
    <Path d="M10 7v5" />
    <Path d="M8 9h4" />
    <Path d="M13 21h4l2 -12l-2 -6h-4" />
  </Svg>
);
export default SvgCoffin;
