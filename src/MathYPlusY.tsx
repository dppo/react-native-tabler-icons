import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMathYPlusY = (props: SvgProps) => (
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
    <Path d="M2 9l3 5.063" />
    <Path d="M8 9l-4.8 9" />
    <Path d="M16 9l3 5.063" />
    <Path d="M22 9l-4.8 9" />
    <Path d="M10 12h4" />
    <Path d="M12 10v4" />
  </Svg>
);
export default SvgMathYPlusY;
