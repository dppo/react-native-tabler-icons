import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMusicOff = (props: SvgProps) => (
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
    <Path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M14.42 14.45a3 3 0 1 0 4.138 4.119" />
    <Path d="M9 17v-8m0 -4v-1h10v11" />
    <Path d="M12 8h7" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgMusicOff;
