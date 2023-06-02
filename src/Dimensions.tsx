import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDimensions = (props: SvgProps) => (
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
    <Path d="M3 5h11" />
    <Path d="M12 7l2 -2l-2 -2" />
    <Path d="M5 3l-2 2l2 2" />
    <Path d="M19 10v11" />
    <Path d="M17 19l2 2l2 -2" />
    <Path d="M21 12l-2 -2l-2 2" />
    <Path d="M3 10m0 2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2z" />
  </Svg>
);
export default SvgDimensions;
