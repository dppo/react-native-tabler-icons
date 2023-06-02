import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGitPullRequestClosed = (props: SvgProps) => (
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
    <Path d="M6 8v8" />
    <Path d="M18 11v5" />
    <Path d="M16 4l4 4m0 -4l-4 4" />
  </Svg>
);
export default SvgGitPullRequestClosed;
