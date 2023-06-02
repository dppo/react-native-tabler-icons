import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const Svg2Fa = (props: SvgProps) => (
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
    <Path d="M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54" />
    <Path d="M10 16v-8h4" />
    <Path d="M10 12l3 0" />
    <Path d="M17 16v-6a2 2 0 0 1 4 0v6" />
    <Path d="M17 13l4 0" />
  </Svg>
);
export default Svg2Fa;
