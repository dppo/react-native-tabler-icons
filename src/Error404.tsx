import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgError404 = (props: SvgProps) => (
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
    <Path d="M3 7v4a1 1 0 0 0 1 1h3" />
    <Path d="M7 7v10" />
    <Path d="M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z" />
    <Path d="M17 7v4a1 1 0 0 0 1 1h3" />
    <Path d="M21 7v10" />
  </Svg>
);
export default SvgError404;
