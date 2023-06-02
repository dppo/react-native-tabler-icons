import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMailAi = (props: SvgProps) => (
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
    <Path d="M10 19h-5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4" />
    <Path d="M3 7l8 5.345m4 -1.345l6 -4" />
    <Path d="M14 21v-4a2 2 0 1 1 4 0v4" />
    <Path d="M14 19h4" />
    <Path d="M21 15v6" />
  </Svg>
);
export default SvgMailAi;
