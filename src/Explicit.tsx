import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgExplicit = (props: SvgProps) => (
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
    <Path d="M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z" />
    <Path d="M14 8h-4v8h4" />
    <Path d="M14 12h-4" />
  </Svg>
);
export default SvgExplicit;
