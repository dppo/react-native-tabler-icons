import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowRightSquare = (props: SvgProps) => (
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
    <Path d="M7 12l14 0" />
    <Path d="M18 15l3 -3l-3 -3" />
    <Path d="M3 10h4v4h-4z" />
  </Svg>
);
export default SvgArrowRightSquare;
