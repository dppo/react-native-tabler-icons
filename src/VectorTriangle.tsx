import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgVectorTriangle = (props: SvgProps) => (
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
    <Path d="M10 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
    <Path d="M3 17m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
    <Path d="M17 17m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
    <Path d="M6.5 17.1l5 -9.1" />
    <Path d="M17.5 17.1l-5 -9.1" />
    <Path d="M7 19l10 0" />
  </Svg>
);
export default SvgVectorTriangle;
