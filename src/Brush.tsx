import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrush = (props: SvgProps) => (
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
    <Path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
    <Path d="M21 3a16 16 0 0 0 -12.8 10.2" />
    <Path d="M21 3a16 16 0 0 1 -10.2 12.8" />
    <Path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
  </Svg>
);
export default SvgBrush;
