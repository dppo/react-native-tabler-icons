import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPlaylistAdd = (props: SvgProps) => (
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
    <Path d="M19 8h-14" />
    <Path d="M5 12h9" />
    <Path d="M11 16h-6" />
    <Path d="M15 16h6" />
    <Path d="M18 13v6" />
  </Svg>
);
export default SvgPlaylistAdd;
