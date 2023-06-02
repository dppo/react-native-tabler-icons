import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgFall = (props: SvgProps) => (
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
    <Path d="M11 21l1 -5l-1 -4l-3 -4h4l3 -3" />
    <Path d="M6 16l-1 -4l3 -4" />
    <Path d="M6 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    <Path d="M13.5 12h2.5l4 2" />
  </Svg>
);
export default SvgFall;
