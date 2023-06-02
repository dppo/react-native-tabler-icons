import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPlaylist = (props: SvgProps) => (
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
    <Path d="M14 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M17 17v-13h4" />
    <Path d="M13 5h-10" />
    <Path d="M3 9l10 0" />
    <Path d="M9 13h-6" />
  </Svg>
);
export default SvgPlaylist;
