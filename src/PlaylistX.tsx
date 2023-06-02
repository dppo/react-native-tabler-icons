import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPlaylistX = (props: SvgProps) => (
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
    <Path d="M5 12h7" />
    <Path d="M12 16h-7" />
    <Path d="M16 14l4 4" />
    <Path d="M20 14l-4 4" />
  </Svg>
);
export default SvgPlaylistX;
