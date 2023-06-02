import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgRss = (props: SvgProps) => (
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
    <Path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M4 4a16 16 0 0 1 16 16" />
    <Path d="M4 11a9 9 0 0 1 9 9" />
  </Svg>
);
export default SvgRss;
