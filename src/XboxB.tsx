import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgXboxB = (props: SvgProps) => (
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
    <Path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
    <Path d="M13 12a2 2 0 1 1 0 4h-3v-4" />
    <Path d="M13 12h-3" />
    <Path d="M13 12a2 2 0 1 0 0 -4h-3v4" />
  </Svg>
);
export default SvgXboxB;
