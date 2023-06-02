import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSignalHPlus = (props: SvgProps) => (
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
    <Path d="M7 16v-8" />
    <Path d="M11 8v8" />
    <Path d="M7 12h4" />
    <Path d="M14 12h4" />
    <Path d="M16 10v4" />
  </Svg>
);
export default SvgSignalHPlus;
