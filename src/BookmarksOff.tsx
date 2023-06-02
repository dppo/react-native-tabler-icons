import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBookmarksOff = (props: SvgProps) => (
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
    <Path d="M11 7h2a2 2 0 0 1 2 2v2m0 4v6l-5 -3l-5 3v-12a2 2 0 0 1 2 -2" />
    <Path d="M9.265 4a2 2 0 0 1 1.735 -1h6a2 2 0 0 1 2 2v10" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgBookmarksOff;
