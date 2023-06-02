import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgPlayerSkipForward = (props: SvgProps) => (
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
    <Path d="M4 5v14l12 -7z" />
    <Path d="M20 5l0 14" />
  </Svg>
);
export default SvgPlayerSkipForward;
