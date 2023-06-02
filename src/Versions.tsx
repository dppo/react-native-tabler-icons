import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgVersions = (props: SvgProps) => (
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
    <Path d="M10 5m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
    <Path d="M7 7l0 10" />
    <Path d="M4 8l0 8" />
  </Svg>
);
export default SvgVersions;
