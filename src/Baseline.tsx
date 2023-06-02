import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBaseline = (props: SvgProps) => (
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
    <Path d="M4 20h16" />
    <Path d="M8 16v-8a4 4 0 1 1 8 0v8" />
    <Path d="M8 10h8" />
  </Svg>
);
export default SvgBaseline;
