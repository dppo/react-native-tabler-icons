import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgHash = (props: SvgProps) => (
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
    <Path d="M5 9l14 0" />
    <Path d="M5 15l14 0" />
    <Path d="M11 4l-4 16" />
    <Path d="M17 4l-4 16" />
  </Svg>
);
export default SvgHash;
