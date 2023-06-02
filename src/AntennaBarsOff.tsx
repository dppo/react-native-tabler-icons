import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAntennaBarsOff = (props: SvgProps) => (
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
    <Path d="M6 18v-3" />
    <Path d="M10 18v-6" />
    <Path d="M14 18v-4" />
    <Path d="M14 10v-1" />
    <Path d="M18 14v-8" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgAntennaBarsOff;
