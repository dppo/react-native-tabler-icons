import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPlayerSkipBack = (props: SvgProps) => (
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
    <Path d="M20 5v14l-12 -7z" />
    <Path d="M4 5l0 14" />
  </Svg>
);
export default SvgPlayerSkipBack;
