import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSquareRoundedChevronsDown = (props: SvgProps) => (
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
    <Path d="M15 9l-3 3l-3 -3" />
    <Path d="M15 13l-3 3l-3 -3" />
    <Path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
  </Svg>
);
export default SvgSquareRoundedChevronsDown;
