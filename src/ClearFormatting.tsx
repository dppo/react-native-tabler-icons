import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClearFormatting = (props: SvgProps) => (
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
    <Path d="M17 15l4 4m0 -4l-4 4" />
    <Path d="M7 6v-1h11v1" />
    <Path d="M7 19l4 0" />
    <Path d="M13 5l-4 14" />
  </Svg>
);
export default SvgClearFormatting;
