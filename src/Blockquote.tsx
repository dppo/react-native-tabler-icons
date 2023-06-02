import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBlockquote = (props: SvgProps) => (
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
    <Path d="M6 15h15" />
    <Path d="M21 19h-15" />
    <Path d="M15 11h6" />
    <Path d="M21 7h-6" />
    <Path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
    <Path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
  </Svg>
);
export default SvgBlockquote;
