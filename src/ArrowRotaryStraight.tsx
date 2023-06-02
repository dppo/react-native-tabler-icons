import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgArrowRotaryStraight = (props: SvgProps) => (
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
    <Path d="M13 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M13 16v5" />
    <Path d="M13 3v7" />
    <Path d="M9 7l4 -4l4 4" />
  </Svg>
);
export default SvgArrowRotaryStraight;
