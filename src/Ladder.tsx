import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLadder = (props: SvgProps) => (
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
    <Path d="M8 3v18" />
    <Path d="M16 3v18" />
    <Path d="M8 14h8" />
    <Path d="M8 10h8" />
    <Path d="M8 6h8" />
    <Path d="M8 18h8" />
  </Svg>
);
export default SvgLadder;
