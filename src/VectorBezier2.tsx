import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgVectorBezier2 = (props: SvgProps) => (
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
    <Path d="M3 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
    <Path d="M17 17m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
    <Path d="M7 5l7 0" />
    <Path d="M10 19l7 0" />
    <Path d="M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M7 5.5a5 6.5 0 0 1 5 6.5a5 6.5 0 0 0 5 6.5" />
  </Svg>
);
export default SvgVectorBezier2;
