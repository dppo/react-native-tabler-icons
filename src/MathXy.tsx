import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMathXy = (props: SvgProps) => (
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
    <Path d="M14 9l3 5.063" />
    <Path d="M4 9l6 6" />
    <Path d="M4 15l6 -6" />
    <Path d="M20 9l-4.8 9" />
  </Svg>
);
export default SvgMathXy;
