import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgBrandGitlab = (props: SvgProps) => (
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
    <Path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z" />
  </Svg>
);
export default SvgBrandGitlab;
