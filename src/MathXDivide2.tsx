import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMathXDivide2 = (props: SvgProps) => (
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
    <Path d="M10 15h3a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h3" />
    <Path d="M5 12h14" />
    <Path d="M9 3l6 6" />
    <Path d="M9 9l6 -6" />
  </Svg>
);
export default SvgMathXDivide2;
