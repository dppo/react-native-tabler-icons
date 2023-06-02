import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGitBranch = (props: SvgProps) => (
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
    <Path d="M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M7 8l0 8" />
    <Path d="M9 18h6a2 2 0 0 0 2 -2v-5" />
    <Path d="M14 14l3 -3l3 3" />
  </Svg>
);
export default SvgGitBranch;
