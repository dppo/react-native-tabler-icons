import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgVectorBezier = (props: SvgProps) => (
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
    <Path d="M3 14m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
    <Path d="M17 14m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
    <Path d="M10 6m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
    <Path d="M10 8.5a6 6 0 0 0 -5 5.5" />
    <Path d="M14 8.5a6 6 0 0 1 5 5.5" />
    <Path d="M10 8l-6 0" />
    <Path d="M20 8l-6 0" />
    <Path d="M3 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M21 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  </Svg>
);
export default SvgVectorBezier;
