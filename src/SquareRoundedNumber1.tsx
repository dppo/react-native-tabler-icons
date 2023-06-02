import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSquareRoundedNumber1 = (props: SvgProps) => (
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
    <Path d="M10 10l2 -2v8" />
    <Path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
  </Svg>
);
export default SvgSquareRoundedNumber1;
