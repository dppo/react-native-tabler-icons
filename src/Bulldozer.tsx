import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBulldozer = (props: SvgProps) => (
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
    <Path d="M2 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <Path d="M12 17a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
    <Path d="M19 13v4a2 2 0 0 0 2 2h1" />
    <Path d="M14 19h-10" />
    <Path d="M4 15h10" />
    <Path d="M9 11v-5h2a3 3 0 0 1 3 3v6" />
    <Path d="M5 15v-3a1 1 0 0 1 1 -1h8" />
    <Path d="M19 17h-3" />
  </Svg>
);
export default SvgBulldozer;
