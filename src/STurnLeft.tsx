import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgSTurnLeft = (props: SvgProps) => (
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
    <Path d="M19 7a2 2 0 1 1 0 -4a2 2 0 0 1 0 4z" />
    <Path d="M17 5h-9.5a3.5 3.5 0 0 0 0 7h9a3.5 3.5 0 0 1 0 7h-13.5" />
    <Path d="M6 16l-3 3l3 3" />
  </Svg>
);
export default SvgSTurnLeft;
