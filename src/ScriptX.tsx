import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgScriptX = (props: SvgProps) => (
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
    <Path d="M14 20h-8a3 3 0 0 1 0 -6h11a3 3 0 0 0 -3 3m7 -3v-8a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v8" />
    <Path d="M17 17l4 4m0 -4l-4 4" />
  </Svg>
);
export default SvgScriptX;
