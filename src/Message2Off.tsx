import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgMessage2Off = (props: SvgProps) => (
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
    <Path d="M8 9h1m4 0h3" />
    <Path d="M8 13h5" />
    <Path d="M8 4h10a3 3 0 0 1 3 3v8c0 .57 -.16 1.104 -.436 1.558m-2.564 1.442h-3l-3 3l-3 -3h-3a3 3 0 0 1 -3 -3v-8c0 -1.084 .575 -2.034 1.437 -2.561" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgMessage2Off;
