import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMathXDivideY = (props: SvgProps) => (
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
    <Path d="M9 3l6 6" />
    <Path d="M9 9l6 -6" />
    <Path d="M9 15l3 4.5" />
    <Path d="M15 15l-4.5 7" />
    <Path d="M5 12h14" />
  </Svg>
);
export default SvgMathXDivideY;
