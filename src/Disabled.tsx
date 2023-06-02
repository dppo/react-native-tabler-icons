import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDisabled = (props: SvgProps) => (
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
    <Path d="M11 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M11 7l0 8l4 0l4 5" />
    <Path d="M11 11l5 0" />
    <Path d="M7 11.5a5 5 0 1 0 6 7.5" />
  </Svg>
);
export default SvgDisabled;
