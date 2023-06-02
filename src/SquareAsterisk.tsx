import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSquareAsterisk = (props: SvgProps) => (
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
    <Path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
    <Path d="M12 8.5v7" />
    <Path d="M9 10l6 4" />
    <Path d="M9 14l6 -4" />
  </Svg>
);
export default SvgSquareAsterisk;
