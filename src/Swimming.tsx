import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSwimming = (props: SvgProps) => (
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
    <Path d="M16 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M6 11l4 -2l3.5 3l-1.5 2" />
    <Path d="M3 16.75a2.4 2.4 0 0 0 1 .25a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 1 -.25" />
  </Svg>
);
export default SvgSwimming;
