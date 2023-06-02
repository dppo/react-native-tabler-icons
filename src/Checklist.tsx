import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgChecklist = (props: SvgProps) => (
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
    <Path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
    <Path d="M14 19l2 2l4 -4" />
    <Path d="M9 8h4" />
    <Path d="M9 12h2" />
  </Svg>
);
export default SvgChecklist;
