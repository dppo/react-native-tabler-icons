import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgCursorOff = (props: SvgProps) => (
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
    <Path d="M9 4a3 3 0 0 1 3 3v1m0 9a3 3 0 0 1 -3 3" />
    <Path d="M15 4a3 3 0 0 0 -3 3v1m0 4v5a3 3 0 0 0 3 3" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgCursorOff;
