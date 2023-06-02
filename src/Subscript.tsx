import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSubscript = (props: SvgProps) => (
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
    <Path d="M5 7l8 10m-8 0l8 -10" />
    <Path d="M21 20h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2" />
  </Svg>
);
export default SvgSubscript;
