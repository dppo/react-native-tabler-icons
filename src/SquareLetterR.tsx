import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSquareLetterR = (props: SvgProps) => (
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
    <Path d="M10 12h2a2 2 0 1 0 0 -4h-2v8m4 0l-3 -4" />
  </Svg>
);
export default SvgSquareLetterR;
