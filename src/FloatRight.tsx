import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFloatRight = (props: SvgProps) => (
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
    <Path d="M14 5m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
    <Path d="M4 7l6 0" />
    <Path d="M4 11l6 0" />
    <Path d="M4 15l16 0" />
    <Path d="M4 19l16 0" />
  </Svg>
);
export default SvgFloatRight;
