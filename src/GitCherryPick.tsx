import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgGitCherryPick = (props: SvgProps) => (
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
    <Path d="M7 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
    <Path d="M7 3v6" />
    <Path d="M7 15v6" />
    <Path d="M13 7h2.5l1.5 5l-1.5 5h-2.5" />
    <Path d="M17 12h3" />
  </Svg>
);
export default SvgGitCherryPick;
