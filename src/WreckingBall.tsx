import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgWreckingBall = (props: SvgProps) => (
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
    <Path d="M19 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M4 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M13 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M13 19l-9 0" />
    <Path d="M4 15l9 0" />
    <Path d="M8 12v-5h2a3 3 0 0 1 3 3v5" />
    <Path d="M5 15v-2a1 1 0 0 1 1 -1h7" />
    <Path d="M19 11v-7l-6 7" />
  </Svg>
);
export default SvgWreckingBall;
