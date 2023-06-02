import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgOld = (props: SvgProps) => (
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
    <Path d="M11 21l-1 -4l-2 -3v-6" />
    <Path d="M5 14l-1 -3l4 -3l3 2l3 .5" />
    <Path d="M8 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M7 17l-2 4" />
    <Path d="M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5" />
  </Svg>
);
export default SvgOld;
