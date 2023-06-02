import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGitPullRequest = (props: SvgProps) => (
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
    <Path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <Path d="M6 8l0 8" />
    <Path d="M11 6h5a2 2 0 0 1 2 2v8" />
    <Path d="M14 9l-3 -3l3 -3" />
  </Svg>
);
export default SvgGitPullRequest;
