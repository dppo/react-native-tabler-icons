import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFlag2Off = (props: SvgProps) => (
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
    <Path d="M5 14h9m4 0h1v-9h-10m-4 0v16" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgFlag2Off;
