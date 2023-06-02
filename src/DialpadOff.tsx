import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgDialpadOff = (props: SvgProps) => (
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
    <Path d="M7 7h-4v-4" />
    <Path d="M17 3h4v4h-4z" />
    <Path d="M10 6v-3h4v4h-3" />
    <Path d="M3 10h4v4h-4z" />
    <Path d="M17 13v-3h4v4h-3" />
    <Path d="M14 14h-4v-4" />
    <Path d="M10 17h4v4h-4z" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgDialpadOff;
