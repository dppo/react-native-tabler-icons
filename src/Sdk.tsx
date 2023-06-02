import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSdk = (props: SvgProps) => (
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
    <Path d="M7 8h-3a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-3" />
    <Path d="M17 8v8" />
    <Path d="M21 8l-3 4l3 4" />
    <Path d="M17 12h1" />
    <Path d="M10 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-2z" />
  </Svg>
);
export default SvgSdk;
