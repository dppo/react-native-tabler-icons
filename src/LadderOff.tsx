import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgLadderOff = (props: SvgProps) => (
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
    <Path d="M8 3v1m0 4v13" />
    <Path d="M16 3v9m0 4v5" />
    <Path d="M8 14h6" />
    <Path d="M8 10h2m4 0h2" />
    <Path d="M10 6h6" />
    <Path d="M8 18h8" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgLadderOff;
