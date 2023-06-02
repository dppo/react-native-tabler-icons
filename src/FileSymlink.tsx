import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFileSymlink = (props: SvgProps) => (
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
    <Path d="M4 21v-4a3 3 0 0 1 3 -3h5" />
    <Path d="M9 17l3 -3l-3 -3" />
    <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <Path d="M5 11v-6a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-9.5" />
  </Svg>
);
export default SvgFileSymlink;
