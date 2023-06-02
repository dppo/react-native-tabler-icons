import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgViewportWide = (props: SvgProps) => (
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
    <Path d="M10 12h-7l3 -3m0 6l-3 -3" />
    <Path d="M14 12h7l-3 -3m0 6l3 -3" />
    <Path d="M3 6v-3h18v3" />
    <Path d="M3 18v3h18v-3" />
  </Svg>
);
export default SvgViewportWide;
