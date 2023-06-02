import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgUvIndex = (props: SvgProps) => (
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
    <Path d="M3 12h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 1 1 8 0" />
    <Path d="M12 4v-1" />
    <Path d="M13 16l2 5h1l2 -5" />
    <Path d="M6 16v3a2 2 0 1 0 4 0v-3" />
  </Svg>
);
export default SvgUvIndex;
