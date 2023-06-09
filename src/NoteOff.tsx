import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgNoteOff = (props: SvgProps) => (
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
    <Path d="M13 20l3.505 -3.505m2 -2l1.501 -1.501" />
    <Path d="M17 13h3v-7a2 2 0 0 0 -2 -2h-10m-3.427 .6c-.355 .36 -.573 .853 -.573 1.4v12a2 2 0 0 0 2 2h7v-6c0 -.272 .109 -.519 .285 -.699" />
    <Path d="M3 3l18 18" />
  </Svg>
);
export default SvgNoteOff;
