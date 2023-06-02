import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgUsers = (props: SvgProps) => (
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
    <Path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <Path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    <Path d="M16 3.13a4 4 0 0 1 0 7.75" />
    <Path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
  </Svg>
);
export default SvgUsers;
