import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgClipboardList = (props: SvgProps) => (
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
    <Path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
    <Path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
    <Path d="M9 12l.01 0" />
    <Path d="M13 12l2 0" />
    <Path d="M9 16l.01 0" />
    <Path d="M13 16l2 0" />
  </Svg>
);
export default SvgClipboardList;
